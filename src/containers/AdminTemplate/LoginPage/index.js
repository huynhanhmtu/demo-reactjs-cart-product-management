import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loader';
import { actLogin, actLoginReset } from './modules/actions';

export default function LoginPage(props) {
  const [infoField, setInfoField] = useState({
    taiKhoan: "",
    matKhau: ""
  });

  const loading = useSelector(state => state.userLoginReducer.loading);
  const error = useSelector(state => state.userLoginReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actLoginReset())
    }
  }, [])

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(infoField, props.history));
  };

  const handleOnChange = (event) => {
    setInfoField({ ...infoField, [event.target.name]: event.target.value });
  };

  const notifications = () => {
    if (loading) {
      return <Loading />
    }
    return error && <div className='alert alert-danger mt-3'>{error.response.data.content}</div>
  }

  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-5 mx-auto">
          <h4 className='text-center'>Login Page</h4>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="taiKhoan" onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="matKhau" autoComplete="on" onChange={handleOnChange} />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-success">Login</button>
              <Link to="/" className='d-block mt-3'>Back to Homepage</Link>
            </div>
          </form>
          <div className='text-monospace'>
            <p>Example:</p>
            <p>Admin account: qwerty - 123</p>
            <p>User account: test003 - 1</p>
          </div>
          {notifications()}
        </div>
      </div>
    </div>
  )
}