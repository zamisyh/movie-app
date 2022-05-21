import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice'

const MovieDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id))
  }, [dispatch, id])



  return (
    <div>
      <h1>Haloo</h1>
    </div>
  )
}

export default MovieDetail