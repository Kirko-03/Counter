import s from './Counter.module.css'
import {MaxValue} from "./MaxValue";
import {FC} from "react";
import {SetValue} from './SetValue';
import {StartValue} from "./StartValue";

type BuilderType = {
    max: number
    remember: boolean
    setRemember: (remember: boolean) => void
    setMax: (max: number) => void
    start: number
 setValue:(value:number)=>void
    setStart: (min: number) => void
    value: number
}

export const CountBuilder: FC<BuilderType> = ({max, setMax, start, setStart, setRemember,remember,setValue}) => {

    return <div className={s.counterForm}>
        <MaxValue setRemember={setRemember} remember={remember} max={max} setMax={setMax} min={start}/>
        <StartValue setRemember={setRemember} start={start} setStart={setStart} max={max}/>
        <SetValue  startValue={start} setStart={setStart} setMax={setMax} setValue={setValue} setRemember={setRemember} remember={remember} maxValue={max}/>
    </div>
}