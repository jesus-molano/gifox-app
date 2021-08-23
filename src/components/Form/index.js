import React, { useState, useCallback } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ["g","pg","pg-13", "r"]

const Form = () => {

  const [keyword, setKeyword] = useState('');
  const [rating, setRating] = useState(RATINGS[0])
  const [, pushLocation] = useLocation();


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    keyword.length > 0 && pushLocation(`/search/${keyword}/${rating}`)
  }, [keyword, pushLocation, rating])

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleChangeRating = (e) => {
    setRating(e.target.value)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input onChange={handleChange} type="text" value={keyword} placeholder="Search gifs here..." />
          <button className='button'>Search</button>
        </div>
        <select onChange={ handleChangeRating }value={rating}>
          <option disabled>Rating Type</option>
          {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
        </select>
      </form>
    </>
  )
}

export default Form
