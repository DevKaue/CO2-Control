import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';
// import Login from './pages/Login/Login'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/recover-password" element={<RecoverPassword/>} />

        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
