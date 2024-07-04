import React from 'react'
import DetailHeader from './DetailHeader'

const DashMain = () => {
  // const dark = "dark"
  // const setDarkMode = () => {
  //   document.querySelector("body").setAttribute("dark-theme","dark")
  // }
  // const setLightMode = () => {
  //   document.querySelector("body").setAttribute("dark-theme","light")
  // }
  // setDarkMode();
  // const handletoogle = (e) => {
  //   if(e.target.checked) setDarkMode();
  //   else setLightMode();
  // }
  return (
    <div className='dashmain'>
      <DetailHeader />
    </div>
  )
}

export default DashMain