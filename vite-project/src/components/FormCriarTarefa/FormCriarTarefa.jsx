import { useState } from "react";

import { Botao, CampoTexto } from "../../components";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = (props) => {

    const [nomeTarefa, setNomeTarefa] = useState('');

    const { setTarefas } = props;

    const atualizarNome = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const adicionarTarefa = (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }

        setTarefas(estatoAtual => {
            const tarefa = {
                id: estatoAtual.length + 1,
                nome: nomeTarefa,
            };

            return [
                ...estatoAtual,
                tarefa,

            ];
        });

        setNomeTarefa('');
    };

    return(
        <form className={style.FormCriarTarefa} onSubmit={adicionarTarefa}>
            <CampoTexto 
             value={nomeTarefa} 
             onChange={atualizarNome}
            />
            <Botao texto=" + "/>
        </form>
    )
}

export { FormCriarTarefa }