import { useState } from "react";

import { Botao, CampoTexto } from "../../components";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = (props) => {
    const [NomeTarefa, setNomeTarefa] = useState();

    const { setTarefa } = props;


    const onChangeNomeTarefa = (e) =>{
        setNomeTarefa(e.currentTarget.value)
    } 


    const AdicionarTarefa = () => {
        event.preventDefault();

        if(!NomeTarefa){
            return;
        }

        setTarefa(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length + 1,
                nome: NomeTarefa,
            };

            return{
                ...estadoAtual,
                tarefa
            };
        });

        setTarefa('');
    };
    
    return(
        <form className={style.FormCriarTarefa} onSubmit={AdicionarTarefa}>
            <CampoTexto value={NomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao texto=" + "/>
        </form>
    )
}

export { FormCriarTarefa }