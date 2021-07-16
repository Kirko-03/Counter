import {ChangeEvent, FC} from "react";

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
    return <div>
       Max value <input type={'number'} style={{background:min===max||min>max||max<0?'rebeccapurple':'',borderColor:min===max||min>max||max<0?'red':''}} value={max}  onChange={rememberFunc}/>
    </div>
}