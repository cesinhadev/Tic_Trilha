import { useState } from "react";

import { Botao, CampoTexto } from "../../components";

import style from "./FormCriarTarefa.module.css";
import { useAppContext } from "../../hooks";
import{ MdAddBox } from 'react-icons/md';

const FormCriarTarefa = () => {

    const { adicionarTarefa } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');

  

    const atualizarNome = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            alert("Por favor inserir um titulo para tarefa")
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
            <Botao texto={<MdAddBox/>}/>
        </form>
    )
}

export { FormCriarTarefa }