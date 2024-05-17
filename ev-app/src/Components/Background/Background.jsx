import React from 'react'
import './Background.css'
import video1 from '../Assets/video1.mp4'
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'

const Background = ({playstatus, herocount}) => {
if(playstatus){
  return(
  <video className='background fade-in' autoPlay loop muted controls>
    <source src={video1} type='video/mp4'/>
  </video>
  )
}
else if(herocount===0){
  return(
<img src={image1} alt="" className='background fade-in'/>
  )
}
else if(herocount===1){
  return(
  <img src={image2} alt="" className='background fade-in'/>
  )
  }
  else if(herocount===2){
    return(
    <img src={image3} alt="" className='background fade-in'/>
    )
    }
}

export default Background