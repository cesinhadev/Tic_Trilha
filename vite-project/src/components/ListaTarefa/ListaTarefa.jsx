import style from './ListaTarefa.module.css';

import { ListaTarefaItem } from "./ListaTarefaItem";

const ListaTarefa = () => {
    const tarefas = [
        {id: 1, nome:"Item 1"},
        {id: 2, nome:"Item 2"},
        {id: 3, nome:"Item 3"},
    ];
    return(
        <ul className={style.ListaTarefa}>
            {tarefas.map(item => <ListaTarefaItem key={item.id} nomeTarefa={item.nome} />)}
        </ul>
    )
};

export { ListaTarefa };