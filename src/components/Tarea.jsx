import { useState } from "react"




export default function Tarea(props){
    const [modificar, setModi] = useState(false);

    return <div className="padre">
        {modificar ? (<div>Modificado</div>) 
        :(
            <div>
                 <div>{props.nombre}</div> <button onClick={() => setModi(true)}>Editar</button> <button>Eliminar</button> 
            </div>
       
        )}
        </div>
    
    
}