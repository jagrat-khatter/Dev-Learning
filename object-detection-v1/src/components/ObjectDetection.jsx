import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import '../styles/objectDetection.css';

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const liveViewRef = useRef(null);
  const [model, setModel] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const childrenRefs = useRef([]);

  useEffect(() => {
    cocoSsd.load().then((loadedModel) => {
      setModel(loadedModel);
      console.log('Model loaded');
    });
  }, []);

  const clearBoxes = () => {
    childrenRefs.current.forEach(child => {
      if (liveViewRef.current.contains(child)) {
        liveViewRef.current.removeChild(child);
      }
    });
    childrenRefs.current = [];
  };

  const predictWebcam = () => {
    model.detect(videoRef.current).then(predictions => {
      clearBoxes();

      predictions.forEach(pred => {
        if (pred.score > 0.66) {
          const p = document.createElement('p');
          p.innerText = `${pred.class} - ${Math.round(pred.score * 100)}%`;
          p.className = 'prediction-label';
          p.style.left = `${pred.bbox[0]}px`;
          p.style.top = `${pred.bbox[1] - 10}px`;

          const box = document.createElement('div');
          box.className = 'highlighter';
          box.style.left = `${pred.bbox[0]}px`;
          box.style.top = `${pred.bbox[1]}px`;
          box.style.width = `${pred.bbox[2]}px`;
          box.style.height = `${pred.bbox[3]}px`;

          liveViewRef.current.appendChild(box);
          liveViewRef.current.appendChild(p);
          childrenRefs.current.push(box, p);
        }
      });

      window.requestAnimationFrame(predictWebcam);
    });
  };

  const enableWebcam = async () => {
    if (!model) return;

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.addEventListener('loadeddata', predictWebcam);
    setWebcamEnabled(true);
  };

  return (
    <div className="container">
      <h1 className="title">Object Detection with TensorFlow.js</h1>
      <p>Click the button below after the model loads to enable webcam.</p>

      <section
        ref={liveViewRef}
        className={`live-view ${model ? '' : 'disabled'}`}
      >
        {!webcamEnabled && (
          <button onClick={enableWebcam} className="webcam-button">
            Enable Webcam
          </button>
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          width="640"
          height="480"
          className="webcam-video"
        ></video>
      </section>
    </div>
  );
};

export default ObjectDetection;
