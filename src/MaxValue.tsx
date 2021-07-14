import {FC} from "react";

type MaxType = {
    max:number
    min:number
    setMax:(max:number)=>void
}

export const MaxValue:FC<MaxType> = ({max,setMax,min}) => {
    return <div>
       Max <input type={'number'} style={{background:min===max||min>max||max<0?'rebeccapurple':'',borderColor:min===max||min>max||max<0?'red':''}} value={max} onChange={(e)=>setMax(+e.currentTarget.value)}/>
    </div>
}