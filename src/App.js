import react, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';


import AdminUser from './components/pages/adminUser';
import SignUpClient from './components/pages/signUpClient';
import SignUpAdmin from './components/pages/signUpAdmin';
import ProfileClient from './components/pages/profileClient';
import ProfileAdmin from './components/pages/profileAdmin';


const App = () => {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<AdminUser />} />
        <Route exact path='/signupclient' element={<SignUpClient />} />
        <Route exact path='/signupadmin' element={<SignUpAdmin />} />
        <Route exact path='/profileclient' element={<ProfileClient />} />
        <Route exact path='/profileadmin' element={<ProfileAdmin />} />
      </Routes>

    </BrowserRouter>
  )

}



export default App;
