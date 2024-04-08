import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO } from '../../Botao';
import style from './ListaTarefaItem.module.css';


const ListaTarefaItem = (props) => {
    const { id, nomeTarefa } = props;

    const { removerTarefa } = useAppContext();

    return(
    <li className={style.ListaTarefaItem}>
        { nomeTarefa }
        <Botao 
        texto="-" 
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick = {() => removerTarefa(id)}
        />
    </li>
    );
};

export { ListaTarefaItem };