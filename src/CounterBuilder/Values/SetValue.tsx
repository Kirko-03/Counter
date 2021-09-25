import s from "./../../Counter/Counter.module.css";
import { FC, useEffect } from "react";

type SetValueType = {
  setRemember: (remember: boolean) => void;
  remember: boolean;
  maxValue: number;
  startValue: number;
  setValue: (value: number) => void;
  setMax: (maxValue: number) => void;
  setStart: (startValue: number) => void;
};
export const SetValue: FC<SetValueType> = ({
  maxValue,
  startValue,
  setRemember,
  remember,
  setValue,
  setMax,
  setStart,
}) => {
  useEffect(() => {
    let max = localStorage.getItem("maxValue");
    if (max) {
      let newMax = JSON.parse(max);
      setMax(newMax);
    }
    let start = localStorage.getItem("startValue");
    if (start) {
      let newStart = JSON.parse(start);
      setStart(newStart);
    }
  }, [setStart, setMax]);

  useEffect(() => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("startValue", JSON.stringify(startValue));
  }, [maxValue, startValue]);

  const remFunc = () => {
    setRemember(false);
    setValue(startValue);
  };
  return (
    <div>
      <button
        disabled={!remember || startValue < 0 || startValue === maxValue}
        onClick={remFunc}
        className={s.button}
        style={{ background: "blueviolet" }}
      >
        Set
      </button>
    </div>
  );
};
