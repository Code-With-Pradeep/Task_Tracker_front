import React from 'react'
import profileImg from '../Img/profile.png'

const DetailHeader = () => {
    const name ="pradeep"
  return (
    <div className='detailsheader'>
        <div className='details-box'>
            <div className="detail-content">
                <h1 className='name-con'>Hi,{name}</h1>
                <p>Let's finish your task today</p>
            </div>
            <div className='profile-image'>
                <img src={profileImg} />
            </div>
        </div>
    </div>
  )
}

export default DetailHeader