import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actAddUser } from './modules/actions';

export default function AddUserPage() {
  const [info, setInfo] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP02",
    maLoaiNguoiDung: "QuanTri",
    hoTen: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value
    })
  }

  const dispatch = useDispatch();
  const loading = useSelector(state => state.addUserReducer.loading);
  const error = useSelector(state => state.addUserReducer.error);

  const handleAddUser = (event) => {
    event.preventDefault();
    dispatch(actAddUser(info));
  }

  return (
    <div className='m-auto col-5 mt-3'>
      <h4 className='text-center'>Add User</h4>
      <form onSubmit={handleAddUser}>
        <div className="form-group">
          <span>Tài khoản</span>
          <input className="form-control" name="taiKhoan" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input className="form-control" name="matKhau" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Họ tên</span>
          <input className="form-control" name="hoTen" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input className="form-control" name="email" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input className="form-control" name="soDt" onChange={handleOnchange} />
        </div>
        {/* 2 tính năng này nên để trong thẻ select để người dùng chọn (nếu sử dụng API cho phép truy cập các giá trị này) */}
        {/* <div className="form-group">
          <span>Mã nhóm</span>
          <input className="form-control" name="maNhom" />
        </div>
        <div className="form-group">
          <span>Mã loại người dùng</span>
          <input className="form-control" name="maLoaiNguoiDung" />
        </div> */}
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">Add user</button>
        </div>
      </form>
    </div>
  )
}
