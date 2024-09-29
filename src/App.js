import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter'; // Counter 컴포넌트 가져오기

function App() {
  const [bgColor, setBgColor] = useState("#282c34"); // 배경 색상 상태

  const handleButtonClick = (bg) => {
    setBgColor(bg);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
        />
        <Hello />
        <div>
          <button onClick={() => handleButtonClick("#282c34")}>Default</button>
          <button onClick={() => handleButtonClick("rgba(255, 0, 0, 0.5)")}>Light Red</button>
          <button onClick={() => handleButtonClick("rgba(255, 255, 0, 0.5)")}>Light Yellow</button>
          <button onClick={() => handleButtonClick("rgba(0, 128, 0, 0.5)")}>Light Green</button>
        </div>
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;