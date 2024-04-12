import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
// import Login from './pages/Login/Login'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
