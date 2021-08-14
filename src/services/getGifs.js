import { API_KEY, API_URL } from "./settings";
const getGifs = ({ keyword, mode, page = 0, limit=25 } = {}) => {
  
  let apiUrl = null;

  if (mode === 'trending') {
    apiUrl = `${API_URL}/gifs/${mode}?api_key=${API_KEY}&limit=${limit}&offset=${page*limit}&rating=r&lang=en`;
  } else if (mode === 'search') {
    apiUrl = `${API_URL}/gifs/${mode}?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=r&lang=en`;
  }
  
  return fetch(apiUrl)
      .then(res => res.json())
      .then(response => {
        const { data } = response;
        const gifs = data.map(gif => {
          const { title, id, images } = gif;
          const { url } = images.downsized_medium;
          return { title, id, url };
        })
        return gifs
      })
}

export default getGifs
