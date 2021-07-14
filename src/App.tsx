import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import { CountBuilder} from './CountBilder';

function App() {
    const [value,setValue] = useState(0)
    const [max,setMax] = useState(10)
    const [min,setMin] = useState(0)
    return (
    <div className="App">
      <header className="App-header">
       <CountBuilder min={min} setMin={setMin} setMax={setMax} max={max} />
          <Counter value={value} setValue={setValue} maxValue={max} minValue={min}/>
      </header>
    </div>
  );
}

export default App;
