import React, { useState } from 'react';
import { Routes, Route, Router } from "react-router-dom"
import ChatBox from './Pages/ChatBoxPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import AdminPannelPage from './Pages/AdminPannelPage';
import CodeCompilerPage from './Pages/CodeCompilerPage';
import BrowseUsersPage from './Pages/BrowseUsersPage';
// import RegisterPage from './Pages/RegisterPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatBox />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminPannelPage />} />
      <Route path="/compile_code" element={<CodeCompilerPage />} />
      <Route path="/browse_users" element={<BrowseUsersPage />} />
      <Route path="/my_codes" element={<MyCodesPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
