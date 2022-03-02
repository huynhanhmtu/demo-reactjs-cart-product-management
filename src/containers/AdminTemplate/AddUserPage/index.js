import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'components/Loader';
import { actAddUser, actAddUserReset } from './modules/actions';

export default function AddUserPage() {
  const [info, setInfo] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
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

  const handleAddUser = (event) => {
    event.preventDefault();
    dispatch(actAddUser(info));
  }

  const dispatch = useDispatch();
  const success = useSelector(state => state.addUserReducer.data?.message);
  const loading = useSelector(state => state.addUserReducer.loading);
  const error = useSelector(state => state.addUserReducer.error);

  const handleLoading = () => {
    if (loading) {
      return (<Loading />);
    }
    if (success) {
      return <div className='alert alert-primary mt-3'>{success}</div>
    }
    return error && <div className='alert alert-danger mt-3'>{error.response.data.content}</div>
  }

  useEffect(() => {
    return () => {
      dispatch(actAddUserReset());
    }
  }, [])

  return (
    <div className='m-auto col-5 mt-3'>
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
        <div className="form-group">
          <span>Nhóm User</span>
          <select className="custom-select" name='maLoaiNguoiDung' onChange={handleOnchange}>
            <option value="QuanTri" className='selected'>Quản Trị</option>
            <option value="KhachHang">Khách Hàng</option>
          </select>
        </div>
        <div className="form-group">
          <span>Mã nhóm học viên</span>
          <select className="custom-select" name='maNhom' onChange={handleOnchange}>
            <option value="GP01" className='selected'>GP01</option>
            <option value="GP02">GP02</option>
          </select>
        </div>
        <div className="form-group text-center mt-3">
          <button type="submit" className="btn btn-primary">Add user</button>
        </div>
        <div>
          {handleLoading()}
        </div>
      </form>
    </div>
  )
}
