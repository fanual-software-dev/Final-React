import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
    const [open,setOpen] = useState(true)

    const Sidebar = ()=>{
      if (open){

        document.getElementById('sidebar').style.transition = "1s ease"
        document.getElementById('sidebar').style.left = "0"
        document.getElementById('open').style.right = "-12%"
        document.getElementById('closer').style.transform = "rotate(180deg)"
        
        setOpen(!open)
      }

      else{

        document.getElementById('sidebar').style.left = "-185px"
        document.getElementById('sidebar').style.transition = "1s ease"
        document.getElementById('open').style.right = "-12%"
        document.getElementById('closer').style.transform = "rotate(0deg)"
        
        setOpen(!open)
      }
    }



    
  return (
    <>
        <div className='big-div'>
            <div className='side-bar  d-flex flex-column gap-3'>
            
              <NavLink to="/movies/adventure" className='link  '>Adventure</NavLink>
              <NavLink to="/movies/action" className='link '>Action</NavLink>
              <NavLink to="/movies/animation" className='link  '>Animation</NavLink>
              <NavLink to="/movies/drama" className='link '>Drama</NavLink>
              <NavLink to="/movies/si-fi" className='link'>Science Fiction</NavLink>
              <NavLink to="/movies/romance" className='link'>Romance</NavLink> 
              <NavLink to="/movies/crime" className='link'>Crime</NavLink>
              <NavLink to="/movies/fantasy" className='link '>Fantasy</NavLink>
              <NavLink to="/movies/war" className='link '>War</NavLink>
              <NavLink to="/movies/history" className='link '>History</NavLink>
              <NavLink to="/movies/thriller" className='link'>Thriller</NavLink>
              <NavLink to="/movies/documentary" className='link'>Documentary</NavLink>
              <NavLink to="/movies/family" className='link'>Family</NavLink>
              <NavLink to="/movies/tv-movie" className='link'>Tv Movie</NavLink>
              <NavLink to="/movies/western" className='link'>Western</NavLink>
            </div>
        </div>

        <div id='sidebar'>
            <div className='side-bar d-flex flex-column gap-3'>
              <NavLink to="/movies/adventure" className='link  '>Adventure</NavLink>
              <NavLink to="/movies/action" className='link '>Action</NavLink>
              <NavLink to="/movies/animation" className='link  '>Animation</NavLink>
              <NavLink to="/movies/drama" className='link '>Drama</NavLink>
              <NavLink to="/movies/si-fi" className='link'>Science Fiction</NavLink>
              <NavLink to="/movies/romance" className='link'>Romance</NavLink> 
              <NavLink to="/movies/crime" className='link'>Crime</NavLink>
              <NavLink to="/movies/fantasy" className='link '>Fantasy</NavLink>
              <NavLink to="/movies/war" className='link '>War</NavLink>
              <NavLink to="/movies/history" className='link '>History</NavLink>
              <NavLink to="/movies/thriller" className='link'>Thriller</NavLink>
              <NavLink to="/movies/documentary" className='link'>Documentary</NavLink>
              <NavLink to="/movies/family" className='link'>Family</NavLink>
              <NavLink to="/movies/tv-movie" className='link'>Tv Movie</NavLink>
              <NavLink to="/movies/western" className='link'>Western</NavLink>
            </div>
            <button id='open' onClick={Sidebar} className='open position-absolute'><img id='closer' src="https://cdn-icons-png.flaticon.com/128/10238/10238640.png" alt="" width={15} height={15} /></button>
        </div>


    </>
    
  )
}

export default Sidebar
