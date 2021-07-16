import {ChangeEvent, FC} from "react"

type MinType = {
    start:number
    setStart:(min:number)=>void
    setRemember: (remember: boolean) => void
    max:number
}

export const StartValue:FC<MinType> = ({start,setStart,max,setRemember}) => {
    const rememberFunc=(e:ChangeEvent<HTMLInputElement>)=>{
        setStart(+e.currentTarget.value)
        setRemember(true)
    }

    return <div>
        Start value <input type={'number'} style={{background:start<0||start===max||start>max?'rebeccapurple':'',borderColor:start<0||start===max||start>max?'red':''}} value={start} onChange={rememberFunc}/>
    </div>
}