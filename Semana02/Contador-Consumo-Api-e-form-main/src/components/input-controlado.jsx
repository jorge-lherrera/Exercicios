import {useState} from "react"

export function InputControlado(){
    
    const [texto, setTexto]= useState(null)
    
    
    return(
        <div className="container mt-4">
            <input
            placeholder="Informe seu nome"
            className="form-control"
            onChange={(event)=> setTexto(event.target.value)}
                />

        <span>{texto}</span>
        </div>

    )
    
}

