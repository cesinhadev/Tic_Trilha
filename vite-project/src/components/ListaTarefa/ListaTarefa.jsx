import { useAppContext } from '../../hooks';
import style from './ListaTarefa.module.css';

import { ListaTarefaItem } from "./ListaTarefaItem";

const ListaTarefa = () => {
    const { tarefas } = useAppContext(); 
    return(
        <ul className={style.ListaTarefa}>
            {!tarefas.length && (
                <p>Não há tarefa cadastrada...</p>
            )}
            {tarefas.map(item => (
            <ListaTarefaItem 
                key={item.id} 
                id={item.id} 
                nomeTarefa={item.nome} 
            />
        ))}
        </ul>
    )
};

export { ListaTarefa };