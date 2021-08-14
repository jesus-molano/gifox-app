import { useState, useEffect, useContext } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

const useGifs = ({keyword} = {keyword: null}, mode) => {

  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  // recuperamos la keyword del localstorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword');
  const modeToUse = mode || 'trending';

  useEffect(function () {
    setLoading(true);

    getGifs({ keyword: keywordToUse, mode: modeToUse })
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localstorage
        localStorage.setItem('lastKeyword', keyword)
		});
  }, [keyword, keywordToUse,modeToUse, setGifs]);

  useEffect(function () {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, mode: modeToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    
  }, [page, keywordToUse, modeToUse, setGifs])

  return {loading, loadingNextPage, gifs, setPage}
}

export default useGifs
