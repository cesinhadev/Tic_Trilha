import style from './ListaTarefa.module.css';
import { ListaTarefaItem } from "./ListaTarefaItem";

const ListaTarefa = () => {
    const tarefa = [
        {id: 1, nome:"Item 1"},
        {id: 2, nome:"Item 2"},
        {id: 3, nome:"Item 3"},
    ];
    return(
        <ul className={style.ListaTarefa}>
            {tarefa.map(item => <ListaTarefaItem key={item.id} nomeTarefa={item.nome} />)}
        </ul>
    )
};

export { ListaTarefa };