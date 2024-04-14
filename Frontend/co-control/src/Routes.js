import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';
import NewPassword from './pages/NewPassword/NewPassword';
// import Login from './pages/Login/Login'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/recover-password" element={<RecoverPassword/>} />
            <Route path="/new-password" element={<NewPassword/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
