import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loader';
import { actFetchDetailMovie } from './modules/actions';

export default function DetailMoviePage(props) {
  const dispatch = useDispatch();
  // Get data from reducer
  const movie = useSelector(state => state.detailMovieReducer.movie);
  const loading = useSelector(state => state.detailMovieReducer.loading);
  const error = useSelector(state => state.detailMovieReducer.error);

  useEffect(() => {
    const movieId = props.match.params.id;
    dispatch(actFetchDetailMovie(movieId));
  }, []);

  const handleRenderData = () => {
    if (error) {
      return <div className='m-auto p-3'>{error}</div>
    }
    if (movie) {
      return <Fragment>
        <div className='col-md-5'>
          <img className='img-fluid' src={movie.hinhAnh} />
        </div>
        <div className='col-md-7'>
          <table className='table'>
            <tbody>
              <tr>
                <td style={{ width: "30%", fontWeight: "bold" }}>Tên phim</td>
                <td>{movie.tenPhim}</td>
              </tr>
              <tr>
                <td style={{ width: "30%", fontWeight: "bold" }}>Mô tả</td>
                <td>{movie.moTa}</td>
              </tr>
              <tr>
                <td style={{ width: "30%", fontWeight: "bold" }}>Ngày khởi chiếu</td>
                <td>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
          <div className='text-right'>
            <Link className='btn btn-success' to={`/booking/${movie.maPhim}`}>Đặt vé</Link>
            {/* Tại đây chưa tạo route cho trang booking, nhưng kiểm tra lại đường dẫn ảnh svg của trang PageNotFound */}
          </div>
        </div>
      </Fragment>
    };
  }

  if (loading) {
    return <Loading />
  }
  return (
    <div className='container'>
      <div className='row py-3'>
        {handleRenderData()}
      </div>
    </div>
  )
}