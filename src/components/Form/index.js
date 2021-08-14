import { useState } from 'react';
import { useLocation } from 'wouter';

const Form = () => {

  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();


  const handleSubmit = (e) => {
    e.preventDefault();
    keyword.length > 0 && pushLocation(`/search/${keyword}`)
  }
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <>
       <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search gifs here..." />
        <button id='search-button'className='button'>Search</button>
      </form>
    </>
  )
}

export default Form
