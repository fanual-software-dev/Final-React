import React, { useContext, useEffect, useState } from 'react'
import Movie from './Movie'
import Loading from './Loading'
import customAxios from './service'

const Main = () => {
    const [movies,setMovies] = useState([])
    const [loading,isLoading] = useState(true)
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

    useEffect(()=>{
      const fetchData = async()=>{
  
          try {
              const res =  await customAxios.get("")
              setMovies(res.data.results)
              isLoading(false)
              console.log("Here are the movies",res.data.results,"here are the datas")
          } catch (error){
              console.log(error)
          }
          
      }
  
      fetchData()
  },[])

  return (
    <div className='content movies'>
      {loading && numbers.map((element,id)=>(<Loading key={id}/>))}
      {movies?movies.map((element,id)=>(<Movie props={element} key={id}/>)):''}
    </div>
  )
}

export default Main
