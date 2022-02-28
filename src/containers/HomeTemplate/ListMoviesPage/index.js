import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loader';
import Movie from './Movie';
import { actFetchListMovies } from './modules/actions';

export default function ListMoviesPage() {
  const dispatch = useDispatch();
  // Get data from reducer
  const listMovie = useSelector(state => state.listMoviesReducer.listMovie);
  const loading = useSelector(state => state.listMoviesReducer.loading);
  const error = useSelector(state => state.listMoviesReducer.error);

  const handleRenderData = () => {
    if (error) {
      return <div className='m-auto p-3'>{error}</div>
    }
    if (listMovie) {
      return listMovie.map(movie => {
        return <Movie key={movie.maPhim} movie={movie} />
      })
    }
  };

  useEffect(() => {
    dispatch(actFetchListMovies());
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <div className='container'>
      <div className='row'>
        {handleRenderData()}
      </div>
    </div>
  )
}