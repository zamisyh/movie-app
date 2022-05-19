import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKeys'

const Home = () => {

  useEffect(() => {
    const fetchMovie = async () => {
      const movieText = "Harry"
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err)
        })

      console.log(response)
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