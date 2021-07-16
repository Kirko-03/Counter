import {ChangeEvent, FC} from "react"
import s from './CountBilder.module.css'

type MinType = {
    start: number
    setStart: (min: number) => void
    setRemember: (remember: boolean) => void
    max: number
}

export const StartValue: FC<MinType> = ({start, setStart, max, setRemember}) => {
    const rememberFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
        setRemember(true)
    }

    return <div className={s.nameBoard}>
        Start value <input type={'number'} className={s.value} style={{
        background: start < 0 || start === max || start > max ? 'rebeccapurple' : 'cyan',
        borderColor: start < 0 || start === max || start > max ? 'red' : ''
    }} value={start} onChange={rememberFunc}/>
    </div>
}