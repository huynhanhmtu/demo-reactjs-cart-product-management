import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function LoginPage(props) {
  const [infoField, setInfoField] = useState({
    taiKhoan: "",
    matKhau: ""
  });

  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    setInfoField({ ...infoField, [event.target.name]: event.target.value });
  };

  const notifications = () => {
    // return error && <div className='alert alert-danger mt-3'>{error.response.data.content}</div>
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
              <input type="text" className="form-control" name="matKhau" onChange={handleOnChange} />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-success">Login</button>
            </div>
          </form>
          {notifications()}
        </div>
      </div>
    </div>
  )
}