import React from 'react'

export default function Movie({ movie }) {
  // const { movie } = props;
  const MAX_TITLE_LENGTH = 18;

  return (
    <div className="col-md-3 p-3">
      <div className="card overflow-hidden">
        <img className="card-img-top d-inline-block" src={movie.hinhAnh} alt={movie.biDanh} style={{ height: 350, minWidth: "100%" }} />
        <div className="card-body">
          <h5 className="card-title">{movie.tenPhim.substring(0, MAX_TITLE_LENGTH)}{movie.tenPhim.length > MAX_TITLE_LENGTH ? "..." : ""}</h5>
          <button className='btn btn-success' type='button'>Detail</button>
        </div>
      </div>
    </div>
  )
}