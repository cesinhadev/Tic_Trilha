import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rotape } from "../../components"


const LayoutPadrao = () => {
    return (
        <>
        <Cabecalho/>
        <Conteudo>
            <Outlet/>
        </Conteudo>
        <Rotape criador="Cesar"/>
        </>
    )
         
    
};

export { LayoutPadrao }