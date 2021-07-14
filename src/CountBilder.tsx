import s from './CountBilder.module.css'
import {MaxValue} from "./MaxValue";
import {MinValue} from "./MinValue";
import {FC} from "react";
import { SetValue } from './SetValue';
type BuilderType={
    max:number
    setMax:(max:number)=>void
    min:number
    setMin:(min:number)=>void
}

export const CountBuilder:FC<BuilderType> = ({max,setMax,min,setMin}) => {

    return <div className={s.counterForm}>
        <MaxValue max={max} setMax={setMax} min={min}/>
        <MinValue min={min} setMin={setMin} max={max}/>
        <SetValue />
    </div>
}