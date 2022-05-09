import React from 'react';
import './App.css';
import Header from './components/header'
import Carosel from './components/carosel'
import Main from './pages/main'
import Mypage from './pages/mypage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
