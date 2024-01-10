import { useState } from "react";
import Tarea from "./Tarea";


export default function TodoApp(){
    const [titulos, setTitulos] = useState();
    const [lista, setLista] = useState([]);


    function handlerChange(e){
        const valor = e.target.value;
        setTitulos(valor);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newItem = {
            id: crypto.randomUUID(),
            title: titulos,
            completado: false
        }

        const copia = [...lista];
        copia.unshift(newItem);

        setLista(copia);

    }
    return(
        <div className="contenedorTodo">
            <form className="formularioTodo" onSubmit={handleSubmit} >
            <input onChange={handlerChange}></input>
            <input onClick={handleSubmit} type="submit"/>

            </form>
               
            <div className="contenedorLista">
                {
                    lista.map(elemento=>(
                        <Tarea nombre ={elemento.title} key={elemento.id}/>
                    ))
                }
            </div>
            
            
        </div>
        
    );
}