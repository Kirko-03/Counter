import {ChangeEvent, FC} from "react";
import s from  './../CountBuilder.module.css'
type MaxType = {
    max:number
    min:number
    remember: boolean
    setRemember: (remember: boolean) => void
    setMax:(max:number)=>void
}

export const MaxValue:FC<MaxType> = ({max,min,setRemember,setMax}) => {
    const rememberFunc=(e:ChangeEvent<HTMLInputElement>)=>{
        setMax(+e.currentTarget.value)
        setRemember(true)
    }
    return <div className={s.nameBoard}>
       Max value <input type={'number'} className={s.value} style={{background:min===max||min>max||max<0?'rebeccapurple':'cyan',borderColor:min===max||min>max||max<0?'red':''}} value={max}  onChange={rememberFunc}/>
    </div>
}