import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import { CountBuilder} from './CountBilder';

function App() {
    const [value,setValue] = useState(0)
    const [max,setMax] = useState(10)
    const [start,setStart] = useState(0)
    const [remember,setRemember] = useState(false)

    return (
    <div className="App">
      <header className="App-header">
       <CountBuilder value={value}  setValue={setValue} remember={remember} setRemember={setRemember} start={start} setStart={setStart} setMax={setMax} max={max} />
          <Counter value={value} remember={remember} setValue={setValue} maxValue={max} startValue={start}/>
      </header>
    </div>
  );
}

export default App;
