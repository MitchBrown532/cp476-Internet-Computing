import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import SearchPage from './components/SearchPage';
import UpdatePage from './components/UpdatePage';
import DeletePage from './components/DeletePage';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { gapi } from 'gapi-script';

const clientId = "966725211415-8b81k79dqkb7rlskcf7i2hrpb0v4vdkj.apps.googleusercontent.com"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load("client:auth2", start)
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate replace to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

