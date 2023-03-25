import React, { useState } from 'react';
import { Routes, Route, Router } from "react-router-dom"
import ChatBox from './Pages/ChatBoxPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatBox />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
