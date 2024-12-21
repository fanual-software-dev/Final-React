import React from 'react'

const SearchResults = ({props}) => {
    const languages = {"es":"Spanish","en":"English","fr":"French","de":"German","it":"Italian","ja":"Japanese","zh":"Chinese","ko":"Korean","ru":"Russian","hi":"Hindi","ar":"Arabic","pt":"Portuguese","nl":"Dutch","sv":"Swedesh","tr":"Turkish","pl":"Polish","da":"Danish","no":"Norwegian","fi":"Finnish","el":"Greek"}
    const genres = {"28":"action","12":"adventure","16":"animation","99":"documnetary","18":"drama","10749":"romance","878":"si-fi","35":"comedy","80":"crime","10751":"family","14":"fantasy","36":"history","27":"horror","10402":"music","9648":"mystery","10770":"tv movie","53":"thriller","10752":"war","37":"western"}
  return (
    <div className='movie rounded w-100'>
        <img className='cover-image rounded-top' src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" width="100%" height="500" loading='lazy' />
        <p className='text-center fw-bold mt-1'>{props.title}</p>
        <p className='overview px-2'>{props.overview}</p>
        <p className='px-2 fw-bold lang'><span>Original Language : </span>{languages[props.original_language] || "Unknown"}</p>
        <p className='px-2 fw-bold lang'><span>Genres : </span> {props.genre_ids.map((genre,id)=>{if (id<props.genre_ids.length-1){return genres[genre]+', '} else {return genres[genre]}})}</p>
        <p className='px-2 fw-bold lang d-flex align-items-center gap-1'><span className='fw-bold'>Rating </span> : {props.vote_average} <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="" width={14} height={14}/></p>
        <p className='px-2 fw-bold lang'><span className='fw-bold'>Vote count</span> : {props.vote_count}</p>
        <p className='px-2 fw-bold lang'><span className='fw-bold'>Released date</span> : {props.release_date}</p>
        

    </div>
  )
}

export default SearchResults
