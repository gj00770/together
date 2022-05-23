import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import Carosel from './components/carosel'
import Main from './pages/main'
import Mypage from './pages/mypage'
import Product from './pages/product'
import Login from './modal/login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [islogin, setIsLogin] = useState(false);
  const login = () => {
    setIsLogin(!islogin)
    console.log(login)
  }
  return (
    <div className="App">
      {islogin ?
        <Login login={login} />
        :
        null
      }

      <Router>
        <Header login={login} />
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
