import { Cabecalho, Conteudo } from './components'
import './App.css'

const App = () => {
  

  return (
    <>
    <Cabecalho nomeUsuario="João"/>
    <Conteudo>
        <h1>Titulo</h1>
        <p>Texto , Texto , Texto</p>
    </Conteudo>
    </>
   
  )
}

export { App }
