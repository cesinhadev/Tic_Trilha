
import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rotape } from "../../components"

import { useAppContext } from "../../hooks/useAppContext";


const LayoutPadrao = () => {
    const { criador } = useAppContext();
    
    return (
        <>
        <Cabecalho/>
        <Conteudo>
            <Outlet/>
        </Conteudo>
        <Rotape criador={criador}/>
        </>
    )
         
    
};

export { LayoutPadrao }