import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie'
import { FilteringAxios } from './service'
import Loading from './Loading'

const Filters = ({props}) => {
    const [Movies,setMovies] = useState([])
    const [loading,isLoading] = useState(true)
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

    useEffect(()=>{
        const fetchData = async ()=>{

            try{
                const movie = await FilteringAxios.get(`/movie?api_key=53c4ff256384703bcd59d342ecd9742b&with_genres=${props}`)
                setMovies(movie.data.results)
                isLoading(false)
                console.log(Movies,"Here is the movie",movie) 
            }

            catch(error){
                console.log(error)
            }
        }

        fetchData()
    },[props])
  return (
    <div className='content movies'>
        {loading && numbers.map((element,id)=>(<Loading key={id}/>))}
        {Movies?Movies.map((element,id)=>(<Movie props={element} key={id}/>)):""}
    </div>
  )
}

export default Filters
