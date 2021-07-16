import s from './Counter.module.css'
import {FC, useEffect} from "react";


type CounterType = {
    value: number
    setValue: (value: number) => void
    maxValue: number
    startValue: number
    remember:boolean
}
export const Counter: FC<CounterType> = ({value, setValue, maxValue, startValue,remember}) => {

    useEffect(()=>{
       let value = localStorage.getItem('value')
        if(value){
            let newValue = JSON.parse(value)
            setValue(newValue)
        }
    },[setValue])

    useEffect(()=>{
        localStorage.setItem('value',JSON.stringify(value))
    },[value])

    const buttonStyle = {
        color: startValue < 0 || startValue > maxValue ? 'black' : '',
        background: startValue < 0 || maxValue === startValue || startValue > maxValue ? 'red' : 'green'
    }

    const incFunc = () => {
        if (value <= maxValue) {
            setValue(value + 1)
        }
    }
    const decFunc = () => {
        if (value > startValue) {
            setValue(value - 1)
        }
    }
    const scoreboard = () =>{
        if(startValue < 0||maxValue<=startValue){
            return 'Incorrect value'
        }
        else if(remember){
            return "enter values and press 'set'"
        }
        else{
            return  value
        }
    }
    const reset = () => {
        setValue(startValue)
    }
    return <div className={s.counterForm}>
        <div className={s.value}
             style={{

                 // eslint-disable-next-line no-mixed-operators
                 color: value >= maxValue&&!remember  || maxValue <= startValue||value===startValue&&!remember
                 || startValue < 0 ? 'red' : ''
             }}>
            {scoreboard()}</div>
        <div className={s.form}>
            <button disabled={remember||value >= maxValue || startValue < 0 || startValue === maxValue}
                    style={buttonStyle && {background: value >= maxValue ? 'red' : 'green', margin: '10px'}}
                    onClick={incFunc} className={s.button}>inc
            </button>
            <button disabled={remember||value <= startValue || startValue < 0 }
                    style={buttonStyle && {background: value <= startValue || startValue === maxValue || startValue < 0 ? 'red' : 'green'}}
                    onClick={decFunc}
                    className={s.button}>dec
            </button>
            <button onClick={reset} style={{width:'80px'}}
                     disabled={remember||value===startValue}
                    className={s.button}>reset
            </button>
        </div>
    </div>
}