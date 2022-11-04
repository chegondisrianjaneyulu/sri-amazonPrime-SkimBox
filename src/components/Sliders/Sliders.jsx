import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactPlayer from 'react-player'
import './Sliders.css'
export default function Sliders(props) {
  const {details} = props 
  const {id,thumbnailUrl,videoUrl,categoryId} = details
  return (
    <div className='container'>
    <Popup modal trigger={<img className='tumbnail' src={thumbnailUrl} alt='thumbnail'/>} className="popup-content" >
     {close => (
       <div className='modal-container'>
       <button className='button' onClick={() => close()}>Close Button</button>
       <div>
         <ReactPlayer url={videoUrl} controls/>
       </div>
     </div>
     )}
    </Popup>
    </div>
  )
}
