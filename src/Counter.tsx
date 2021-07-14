import s from './Counter.module.css'
import {FC} from "react";

type CounterType = {
    value: number
    setValue: (value: number) => void
    maxValue: number
    minValue: number
}
export const Counter: FC<CounterType> = ({value, setValue, maxValue, minValue}) => {

    const buttonStyle = {
        color: minValue < 0 || minValue > maxValue ? 'black' : '',
        background: minValue < 0 || maxValue === minValue || minValue > maxValue ? 'red' : 'green'
    }

    const incFunc = () => {
        if (value <= maxValue) {
            setValue(value + 1)
        }
    }
    const decFunc = () => {
        if (value > minValue) {
            setValue(value - 1)
        }
    }
    return <div className={s.counterForm}>
        <div className={s.value}
             style={{
                 color: value >= maxValue || value <= minValue || maxValue === minValue
                 || minValue < 0 ? 'red' : ''
             }}>
            {minValue < 0 || maxValue < 0 || maxValue === minValue || minValue > maxValue ? 'Incorrect value!' : value}</div>
        <div className={s.form}>
            <button disabled={value >= maxValue || minValue < 0}
                    style={buttonStyle && {background: value >= maxValue ? 'red' : 'green', margin: '10px'}}
                    onClick={incFunc} className={s.button}>inc
            </button>
            <button disabled={value <= minValue || minValue < 0}
                    style={buttonStyle && {background: value <= minValue ? 'red' : 'green'}} onClick={decFunc}
                    className={s.button}>dec
            </button>
        </div>
    </div>
}