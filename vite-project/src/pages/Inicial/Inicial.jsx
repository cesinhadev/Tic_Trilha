import { useState } from 'react';

import { FormCriarTarefa, ListaTarefa } from '../../components'

import style from './Inicial.module.css';

const Inicial = () => {
    const [tarefas, setTarefas] = useState([
        {id: 1, nome:"Item 1"},
        {id: 2, nome:"Item 2"},
        {id: 3, nome:"Item 3"},
    ]);
    
    return (
        <div className={style.Inicial}>
            <FormCriarTarefa setTarefas={setTarefas}/>
            <ListaTarefa tarefas={tarefas}/>
        </div>
    )
};

export { Inicial };