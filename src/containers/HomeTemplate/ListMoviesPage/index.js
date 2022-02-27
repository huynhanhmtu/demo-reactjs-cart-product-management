import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../components/Loader';
import Movie from './Movie';

export default function ListMoviesPage() {
  const [data, recieveData] = useState({
    listMovie: null,
    loading: false
  });

  const handleRenderData = () => {
    if (data.listMovie) {
      return data.listMovie.map(movie => {
        return <Movie key={movie.maPhim} movie={movie} />
      })
    }
  };


  useEffect(() => {
    recieveData({ listMovie: null, loading: true });
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
      }
    })
      .then(result => {
        recieveData({ listMovie: result.data.content, loading: false });
      })
      .catch(error => {
        recieveData({ listMovie: null, loading: false });
        alert(error);
      })
  }, []);

  if (data.loading) {
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