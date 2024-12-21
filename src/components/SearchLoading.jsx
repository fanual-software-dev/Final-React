import React from 'react'
import Loading from './Loading'

const SearchLoading = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <div className='content movies'>
      {numbers.map((element,id)=>(<Loading key={id}/>))}
    </div>
  )
}

export default SearchLoading
