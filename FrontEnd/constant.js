const api="http://localhost:8080/api/v1"

const favMovieUrl = 'https://api.themoviedb.org/3/movie/now_playing';

const AiringToday="https://api.themoviedb.org/3/tv/airing_today"

const Popular="https://api.themoviedb.org/3/movie/popular"

const topRated="https://api.themoviedb.org/3/movie/top_rated"
const IMAGEURL="https://image.tmdb.org/t/p/w500"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4MzlhOGIxYjY0MzZmMTFkOTQ2ZTNiMjI0ZjMyYyIsIm5iZiI6MTcyMjU5MTk2MS41MjAxNTQsInN1YiI6IjY1ZTQ1M2MyMjBlNmE1MDE2MzUxOWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pLYcYCcf2ZXlExGlWiuxeMTVPcPgwJDTcvHwPLZogZk'
    }
  };

export {api,favMovieUrl,AiringToday,Popular,topRated,options,IMAGEURL}

