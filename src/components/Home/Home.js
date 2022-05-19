import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKeys'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const movieText = "Harry"
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err)
        })

        dispatch(addMovies(response.data))
      
    }

    fetchMovie()
  }, [])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home