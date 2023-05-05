import React,{useRef} from 'react';
import './Intro.css';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import { useState } from 'react';



const Intro = () => {
  const videoRef=useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideoClick=()=>{
    setPlayVideo((prev)=>!prev);
    if(playVideo){
      videoRef.current.pause();
    }else{
      videoRef.current.play();
    }
  };

  return <div className='app__video'>
    <video type='video/mp4' ref={videoRef} loop muted src={meal}></video>
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideoClick}>
        {playVideo?<BsPauseFill  color='#fff' fontSize={30}/>:<BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div> 
};

export default Intro;
