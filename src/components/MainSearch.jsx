import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import SearchResults from './SearchResults'

const MainSearch = () => {
    const {movies} = useContext(Context)

  return (
    <div className='content movies'>
        {movies?movies.map((element,id)=>(<SearchResults props={element} key={id}/>)):<p className='text-light fw-bold fs-2'>Opps Search Result Not Found.</p>}  
    </div>
  )
}

export default MainSearch
