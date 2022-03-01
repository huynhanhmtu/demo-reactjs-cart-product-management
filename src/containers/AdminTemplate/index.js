import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import AdminSidebar from './_components/Sidebar';

export default function AdminTemplate({ exact, path, component }) {
  const [flag, setFlag] = useState(true);
  const history = useHistory()
  const transData = (data) => {
    setFlag(data);
  }

  if (localStorage.getItem("UserInfo") && flag) {
    return (
      <Fragment>
        <div className='row p-3'>
          <div className='col-md-2'>
            <AdminSidebar transData={transData} />
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