import React from 'react';
import './App.css';
import Header from './components/header'
import Carosel from './components/carosel'
import Main from './pages/main'
import Mypage from './pages/mypage'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Mypage /> */}
    </div>
  );
}

export default App;
