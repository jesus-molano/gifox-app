import { useState, useEffect, useContext } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

const useGifs = ({keyword, rating, mode} = {keyword: null}) => {

  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  // recuperamos la keyword del localstorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword');
  const modeToUse = mode || 'trending';
  const ratingToUse = rating || 'g';

  useEffect(function () {
    setLoading(true);

    getGifs({ keyword: keywordToUse, mode: modeToUse, rating: ratingToUse })
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localstorage
        localStorage.setItem('lastKeyword', keyword)
		});
  }, [keyword, keywordToUse,modeToUse, setGifs, rating, ratingToUse]);

  useEffect(function () {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, mode: modeToUse, page, rating: ratingToUse })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    
  }, [page, keywordToUse, modeToUse, setGifs, rating, ratingToUse])

  return {loading, loadingNextPage, gifs, setPage}
}

export default useGifs
