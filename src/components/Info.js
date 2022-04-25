import React from 'react'
import xyz from './images/photo.jpg'
export default function Info(){
    return (
        <div className="info">
         <img src={xyz} alt='my image'/>
          <div className="info--profile">
           <h1>P SHIVA KRISHNA</h1>
           <h3>Frontend Developer</h3>
           <h4>PSK.website</h4>
           <div className="btn">
           <a className="email"><ion-icon name="mail-outline"></ion-icon><span> Email </span></a> 
           <a className="linkedin" href='https://www.linkedin.com/in/peechara-shiva-krishna-688844216/' ><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a> 
           </div>
        </div>
         </div>
    )
}
