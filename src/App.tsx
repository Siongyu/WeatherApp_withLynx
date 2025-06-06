import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { useNavigate } from 'react-router'

// export function App(props: {
//   onMounted?: () => void
// }) {
//   const [alterLogo, setAlterLogo] = useState(false)
//   const nav = useNavigate();

//   useEffect(() => {
//     console.info('Hello, ReactLynx')
//     props.onMounted?.()
//   }, [])

//   const onTap = useCallback(() => {
//     'background only'
//     setAlterLogo(!alterLogo)
//   }, [alterLogo])

//   return (
//     <view>
//       <view className='Background' />
//       <view className='App'>
//         <view className='Banner'>
//           <view className='Logo' bindtap={onTap}>
//             {alterLogo
//               ? <image src={reactLynxLogo} className='Logo--react' />
//               : <image src={lynxLogo} className='Logo--lynx' />}
//           </view>
//           <view>
//             <text bindtap={() => nav("/home")} className="title">Home</text>
//             <text bindtap={() => nav("/product")} className="title">Product</text>
//           </view>
//         </view>
//       </view>
//     </view>
//   )
// }

export function App() {
  const getTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')   // 2-digit hours
    const minutes = String(now.getMinutes()).padStart(2, '0') // 2-digit minutes
    return `${hours}:${minutes}`
  }
  const [time, setTime] = useState(getTime())
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <view className="container" style="height: 100vh">
      <view style="display: flex; flex-direction: column; align-items: center; margin-top: 100px">
        <text style="color: #fafafa">Good Day, Steve.</text>
        <text style="color: #fafafa; font-size: 80px">{time}</text>
      </view>
      <view style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 150px 0px">
        <text style="color: #fafafa">What would you like to do?</text>
        <text bindtap={() => navigate('/weather')} className="custom-button">WEATHER</text>
      </view>
    </view>
  )
}