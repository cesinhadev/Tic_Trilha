import { Cabecalho, Conteudo, Rotape } from './components'
import './App.css'

const App = () => {
  

  return (
    <>
    <Cabecalho/>
    <Conteudo>
        <h1>Titulo</h1>
        <p>Texto , Texto , Texto</p>
    </Conteudo>
    <Rotape criador="Cesar"/>

    </>
   
  )
}

export { App }
