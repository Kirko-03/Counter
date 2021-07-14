import { FC } from "react"

type MinType = {
    min:number
    setMin:(min:number)=>void
    max:number
}

export const MinValue:FC<MinType> = ({min,setMin,max}) => {
    return <div>
        Min <input type={'number'} style={{background:min<0||min===max||min>max?'rebeccapurple':'',borderColor:min<0||min===max||min>max?'red':''}} value={min} onChange={(e)=>setMin(+e.currentTarget.value)}/>
    </div>
}