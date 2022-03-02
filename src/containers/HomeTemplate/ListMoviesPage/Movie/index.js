import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  const MAX_TITLE_LENGTH = 18;
  return (
    <div className="col-md-3 p-3">
      <div className="card overflow-hidden">
        <img className="card-img-top d-inline-block" src={movie.hinhAnh} alt={movie.biDanh} style={{ height: 350, minWidth: "100%" }} />
        <div className="card-body">
          <h5 className="card-title">{movie.tenPhim.substring(0, MAX_TITLE_LENGTH)}{movie.tenPhim.length > MAX_TITLE_LENGTH ? "..." : ""}</h5>
          <Link className='btn btn-success' to={`./detail/${movie.maPhim}`}>Detail</Link>
        </div>
      </div>
    </div>
  )
}