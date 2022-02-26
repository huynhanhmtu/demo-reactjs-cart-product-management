import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavbarHome from './_components/Navbar';

export default function HomeTemplate(props) {
  const { exact, path, component } = props;

  return (
    <Fragment>
      <NavbarHome />
      <Route exact={exact} path={path} component={component} />
    </Fragment>
  )
}