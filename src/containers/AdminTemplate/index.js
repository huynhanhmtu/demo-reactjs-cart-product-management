import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminDashboard from './_components/Dashboard';

export default function AdminTemplate({ exact, path, component }) {
  if (localStorage.getItem("UserInfo")) {
    return (
      <Fragment>
        <div className='row p-3'>
          <div className='col-md-2'>
            <AdminDashboard />
          </div>
          <div className='col-md-10'>
            <Route exact={exact} path={path} component={component} />
          </div>
        </div>
      </Fragment>
    )
  }
  return <Redirect to="/login" />
}
