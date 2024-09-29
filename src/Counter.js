import React, { useState } from 'react';
import './Counter.css'; // 스타일 파일을 추가할 경우

function Counter() {
  const [count, setCount] = useState(0); // 초기 카운트 값

  const increment = () => {
    setCount(count + 1); // 카운트 증가
  };

  const decrement = () => {
    setCount(count - 1); // 카운트 감소
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;