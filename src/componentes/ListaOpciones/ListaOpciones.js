import "./ListaOpciones.css"
const ListaOpciones = (props)=>
{
  //Metodo Map en lugar de foreach 
  // map-> arreglo.map((equipo)=>{})
  

    const manejarCambio=(e)=>
    {
      props.actualizarEquipo(e.target.value)
      console.log("cambio",e.target.value)

    }

    return <div className="lista-opciones">
                <label>{props.titulo}</label>
                <select value={props.valor} onChange={manejarCambio}>
                  <option value="" disabled defaultValue="" hidden>Selecionar equipo...</option>
                {props.equipos.map((equipo,index)=><option key={index} value={equipo}>{equipo}</option>)}
                </select>
            </div>

}

export default ListaOpciones
