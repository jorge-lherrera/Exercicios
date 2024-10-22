
import './App.css'
import {Contador} from "./components/contador"
import {Noticia} from "./components/noticia"
import {Estado}from "./components/estado"
import { Validacao } from './components/validacao'
import { InputControlado } from "./components/input-controlado"

function App() {
 
  

  return (
    <>
     <Contador></Contador>
     <Noticia></Noticia>
     <Estado></Estado>
     <Validacao></Validacao>
     <InputControlado></InputControlado>
   
    </>
  )
}

export default App
