import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { CountBuilder } from "./CounterBuilder/CountBuilder";

function App() {
  const [value, setValue] = useState(0);
  const [max, setMax] = useState(10);
  const [start, setStart] = useState(0);
  const [remember, setRemember] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <CountBuilder
          value={value}
          setValue={setValue}
          remember={remember}
          setRemember={setRemember}
          start={start}
          setStart={setStart}
          setMax={setMax}
          max={max}
        />
        <Counter
          value={value}
          remember={remember}
          setValue={setValue}
          maxValue={max}
          startValue={start}
        />
      </div>
    </div>
  );
}

export default App;
