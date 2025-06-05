
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from '../Store/atoms/atom2'
import { useEffect } from 'react'
import axios from 'axios'
// In the CASE1
// this setTimout is to clearly show what is problem when fetching takes two much time
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

// useEffect(() => {  // Case 1
//     function kl() {
//         setTimeout(() => {
//             axios.get("https://ab2f5ef5-93d7-4912-b5f7-822c20501863-00-361653a671ye8.sisko.replit.dev/")
//                 .then(res => {
//                     setNetworkCount(res.data)
//                 })
//         }, 1000);
//     } // You are replacing the entire atom value with the whole object from res.data.
//     kl();
// }, [])

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
// ***************  CASE1
// This gives an immediate initial value.

// Components render immediately using those zero values.

// When data comes from the backend later (via axios.get in useEffect), you update the atom using setNetworkCount.

// This triggers a re-render with the new values.

// Result: App loads immediately with zeroes, then updates.

//***************  CASE2
// useRecoilState(notifications) tries to read the value of the notifications atom.

// But the atom’s default is not a value — it’s a selector.

// Since get() is async, it returns a Promise.

// Recoil doesn’t have the value yet, so it suspends.

// React notices this and throws the Suspense boundary (if defined).

// If you’ve wrapped your component with <Suspense fallback={...}>, React will pause rendering the subtree.

// It will show the fallback (<div>Loading...</div>) until the Promise resolves.

// Once the async get() finishes, the result is cached by Recoil and returned to the component.

// ********React requires you to use <Suspense> if you want your UI to handle it.

// ✅ Why This Happens
// Recoil atoms and selectors are React state primitives, and async selectors use Suspense for Data Fetching.

// This means:

// You don’t have to manually manage loading state like in Redux.

// You get a declarative way to pause rendering until data is ready.



