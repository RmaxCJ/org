
import { useState } from "react";
import "./Campo.css"

const Campo = (props) =>
{

    const {type,titulo,placeholder,required,valor}=props
    const manejarCambio =(e)=>
    {
        props.actualizarValor(e.target.value)

    }

    return <div className={`campo campo-${type}`}>
            <label>{titulo}</label>
            <input 
            placeholder={placeholder} 
            required={required} 
            value={valor}
            onChange={manejarCambio}
            type={type}
            />
           
           
           </div>
}

export default Campo