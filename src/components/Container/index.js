import React, { useRef, useEffect} from 'react'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import ListOfGifs from '../ListOfGifs'
import Spinner from 'components/Spinner'
import debounce from 'just-debounce-it'


const Container = ({ keyword, mode, rating }) => {
  const { loading, gifs, setPage } = useGifs({ keyword, rating, mode })
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: '200px',
    externalRef: loading ? null : externalRef,
    once: false
  });


  const debounceHandleNextPage = React.useMemo(
    () =>
    debounce(() => {
      setPage(prevPage => prevPage + 1)
    }, 500
  ), [setPage])

  useEffect(function () {
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])
  
  return (
    <div className='container'>
       
      {loading
        ? <Spinner />
        : <>
          <h2><span>{decodeURI(keyword)}</span></h2>
          <ListOfGifs gifs={gifs} />
          <div id='visor' ref={externalRef}></div>
        </>
      }
    </div>
  )
}

export default Container
