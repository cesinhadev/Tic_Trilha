import { useState } from "react";

import { Botao, CampoTexto } from "../../components";

import style from "./FormCriarTarefa.module.css";
import { useAppContext } from "../../hooks";

const FormCriarTarefa = () => {

    const { adicionarTarefa } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');

  

    const atualizarNome = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }

        adicionarTarefa(nomeTarefa);        

        setNomeTarefa('');
    };

    return(
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto 
             value={nomeTarefa} 
             onChange={atualizarNome}
            />
            <Botao texto=" + "/>
        </form>
    )
}

export { FormCriarTarefa }