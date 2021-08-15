import { useRef, useEffect, useCallback } from 'react'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import ListOfGifs from '../ListOfGifs'
import Spinner from 'components/Spinner'
import debounce from 'just-debounce-it'


const Container = ({ keyword, mode }) => {
  const { loading, gifs, setPage } = useGifs({ keyword }, mode)
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: '400px',
    externalRef: loading ? null : externalRef,
    once: false
  });


  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 500
  ), [])

  useEffect(function () {
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])
  
  return (
    <div className='container'>
       
      {loading
        ? <Spinner />
        : <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id='visor' ref={externalRef}></div>
        </>
      }
    </div>
  )
}

export default Container
