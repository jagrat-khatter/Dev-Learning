import { WebSocketServer  , WebSocket} from 'ws';

const wss = new WebSocketServer({port : 8080})


// event listener for the WebSocket server. It listens for new client connections.
wss.on('connection' , (socket: WebSocket)=>{

    console.log("User connected")

    let iterations = 0;
    // const interval = setInterval(()=>{
    //     iterations++;
    //     if(iterations > 10) socket.close();

    //     socket.send("Current Price of USD is " + (Math.floor(5*Math.random()) + 83));
        
    // } , 1000)


    // socket.on is another event listener but for individual client socket
    socket.on('message' ,(e)=> {

        // e is the event data we use toString bcoz websocket data arrive in binary or Buffer form
        if(e.toString() === 'ping') socket.send("pong")
    })
    

})