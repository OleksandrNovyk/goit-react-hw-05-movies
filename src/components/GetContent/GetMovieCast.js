const api_Key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWM1ZDViYTdlODE3NDUxMjcxY2MxYjU5MGFhMWJhMiIsInN1YiI6IjY0NzliOTRjY2FlZjJkMDBkZjg3YzUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O2D84Wd92P0G8ukkkxsDaaDriqByYeEfP7vvgM-Mbxc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${api_Key}`,
  },
};
export const getMovieCast = async id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.error(err));
};
