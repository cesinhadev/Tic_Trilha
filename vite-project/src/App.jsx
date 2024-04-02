import { Cabecalho, Conteudo, Rotape } from './components'
import { Inicial } from './pages'
import './App.css'

const App = () => {
  

  return (
    <>
    <Cabecalho/>
    <Conteudo>
        <Inicial/>
    </Conteudo>
    <Rotape criador="Cesar"/>

    </>
   
  )
}

export { App }
