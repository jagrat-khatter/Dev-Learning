
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from '../Store/atoms/atom2'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

useEffect(() => { // this setTimout is to clearly show what is problem when fetching takes two much time
    function kl() {
        setTimeout(() => {
            axios.get("https://ab2f5ef5-93d7-4912-b5f7-822c20501863-00-361653a671ye8.sisko.replit.dev/")
                .then(res => {
                    setNetworkCount(res.data)
                })
        }, 1000);
    }
    kl();
}, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network {networkCount.network >= 100 ? "99+" : networkCount.network}</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App