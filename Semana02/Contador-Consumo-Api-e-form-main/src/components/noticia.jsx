import { useState, useEffect } from "react"

export function Noticia(){
    const[noticia, setNoticia]= useState(null);
    const[isLoading, setIsLoading]= useState(true);

    async function getNoticia(){
        try {
            console.log('renderizou');
            setIsLoading(true);
            const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release/');
            const data= await response.json();
            setNoticia(data.items[0])
        } catch (error) {
            console.log(error);            
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getNoticia()
}, [])

return(
    isLoading ? <span>Carregando noticia ...</span> :(
        <div>
            <h1> {noticia.titulo}</h1>
            <p> {noticia.introducao}</p>
            
        </div>
        )
    )
}