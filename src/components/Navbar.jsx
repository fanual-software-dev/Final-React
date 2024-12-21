import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from './ContextProvider'

const Navbar = () => {

    const [result,setResult] = useState([])
    const [query,setquery] = useState('')
    const {movies, dispatch } = useContext(Context)
    const [loading,isLoading] = useState(true)

    const navigate = useNavigate()

    const fetchMovie = async (event) => {

        if (event.key=="Enter"){

            const queries = query.split(' ')
            let searchParams = ''
    
            for (let i = 0; i < queries.length; i++){
                if (i<queries.length-1){
                    searchParams+=queries[i]+'+'
                }
    
                else{
                    searchParams+=queries[i]
                }
            } 
    
            if(searchParams){


    
                try{

                    if(loading){
                        navigate('/search/loading...')
                    }
                    console.log(searchParams,"seacrh params!!!!!!!!")
                    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=53c4ff256384703bcd59d342ecd9742b&query=${searchParams}`)
                    setResult([...res.data.results])
                    isLoading(false)
                    dispatch({type:'GET_MOVIES',payload:res.data.results})
                    navigate('/search/results')

                }

                catch(error){
                    console.log(error)
                }
            } 
        }
 

    }

    const hamburger = ()=>{
        document.getElementById('nav').style.display = "flex"
        document.getElementById('nav').style.transition = "2s"
        document.addEventListener('click',(e)=>{
            const id = e.target.id

            if (id!='hamburger'){
                document.getElementById('nav').style.display = 'none'
            }
        })
    }
  return (
    
        <div className='fluid-container bg-dark w-100 top-bar d-flex align-items-center justify-content-between'>
            <p className='logo mt-3 text-light'>Dot Movies</p>
            <input className='input' onKeyDown={(e)=>(fetchMovie(e))} type="search" placeholder='Search movies by title...' onChange={(e)=>(setquery(e.target.value))} value={query}/>
            <nav className='justify-content-end'>
                <Link className='a text-decoration-none' to="/">Home</Link>
                <Link className='a text-decoration-none' to="/movies">Movies</Link>
                <Link className='a text-decoration-none' to="/movies">Reporters</Link>
                <Link className='a text-decoration-none' to="/movies">About </Link>
                <Link className='a text-decoration-none' to="/support">Support</Link>
            
            </nav>

            <nav id='nav' className='justify-content-end'>
                <Link className='text-light text-decoration-none' to="/">Home</Link>
                <Link className='text-light text-decoration-none' to="/movies">Movies</Link>
                <Link className='text-light text-decoration-none' to="/movies">Reporters</Link>
                <Link className='text-light text-decoration-none' to="/movies">About </Link>
                <Link className='text-light text-decoration-none' to="/support">Support</Link>
            
            </nav>

            <img onClick={hamburger} className='hamburger' id='hamburger' src="https://cdn-icons-png.flaticon.com/128/14025/14025527.png" alt="" width={30} height={30}/>

        </div>
  
  )
}

export default Navbar
