import React from 'react';
import './app.less';
import { SlidingWindowScrollHook } from "./SlidingWindowScrollHook";
import MY_ENDLESS_LIST from './Constants';

function App() {
  return (
    <div className="App">
     <h1>15个元素实现无限滚动</h1>
      <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={195}/>
    </div>
  );
}

export default App;