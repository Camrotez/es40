import { useState } from "react"

function CarDetails({initialData}) {
    const {initValueModel,initValueYear,initValueColor}= initialData
    const [modello,setModello]=useState(initValueModel)
    const [anno,setAnno]=useState(initValueYear)
    const [colore,setColore]= useState(initValueColor)
const handleChangeModel=((e)=>{
    const model = e.target.value
    setModello(model)
})
const handleChangeYear=((e)=>{   
    const eyer = e.target.value 
    setAnno(eyer)    
})
const handleChangeColor=((e)=>{
    const color = e.target.value
    setColore(color)    
})

    return(
        <form>
            <label >modello auto:</label>
            <input type="text" onChange={handleChangeModel} value={modello}/>
            
            <label >anno e mese di immatricolazione:</label>
            <input type="month" onChange={handleChangeYear} value={anno}/>
            
            <label>colore:</label>
            <input type="color" onChange={handleChangeColor} value={colore}/>
            
            <button type="submit">INVIA</button>
        </form>
    )
}
export default CarDetails