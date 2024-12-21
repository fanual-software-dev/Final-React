import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import customAxios from './service'
import { useEffect } from 'react'
import Movie from './Movie'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  
  return (
    <div className='content home  d-flex flex-column align-items-center '>
      <p className='home-txt fw-bold text-i'><span className='text-dange'>Welcome</span> to <span className='text-warni'>Dot Movies.</span> </p>
      <p className='home-txt1 fw-bold'><span className='sp1'>The ocean of movies,</span> <span className='sp2'>where you quench</span> your movie thirst. <span> Experience movie magic like never before - your ticket to entertainment.</span> Your front row seat to the best of cinema - start binge-watching today.</p>
      <button className='button' onClick={()=>navigate('/movies')}>Watch Movies Now</button>

      <div className='films gap-3 py-5'>
        <img src="/alien.png" alt="Image not found" />
        <img src="/venom.png" alt="Image not found"/>
        <img src="/wicked.png" alt="Image not found"/>
        <img src="/freedom.png" alt="Image not found"/>
        <img src="/devilspath.png" alt="Image not found"/>
        <img src="/grinch.png" alt="Image not found"/>
        {/* {movies?movies.slice(0,4).map((movie,id)=>(
          <Movie props={movie} key={id}/>
        )):""} */}
      </div>
    </div>
  )
}

export default Home
