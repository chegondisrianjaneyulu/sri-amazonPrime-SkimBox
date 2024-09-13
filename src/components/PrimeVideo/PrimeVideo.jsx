import React from 'react'
import Carousels from '../Carousels/Carousels'
import './PrimeVideo.css'

export default function PrimeVideo(props) {
  const {movieList} = props
  const actionMovies = movieList.filter(actionItems => (
    actionItems.categoryId === 'ACTION'
  ))
  const comedyMovies = movieList.filter(comedyItems => (
    comedyItems.categoryId === 'COMEDY'
  ))
  
  return (
   
    <div className='main-container'>
        <img className='image' src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"/>
    <div className='content-container'>
    <h1 className='heading'>Sri</h1>
     <h4 className='heading'>Action Movies</h4>
        <Carousels movies={actionMovies}/>
    <h4 className='heading'>Comedy Movies</h4>
       <Carousels  movies={comedyMovies}/>
    </div>
    </div>
  )
}
