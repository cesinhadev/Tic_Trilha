import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, TIPO_BOTAO } from '../../../components';
import { MdDelete } from 'react-icons/md';
import style from './ListaTarefaItem.module.css';


const ListaTarefaItem = (props) => {
    const { id, nomeTarefa } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { editarTarefa, removerTarefa } = useAppContext();

    return(
    <li className={style.ListaTarefaItem}>
        {estaEditando && (
         <CampoTexto
            defaultValue={nomeTarefa}
            onChange={event => editarTarefa(id, event.currentTarget.value)}
            onBlur={()=> setEstaEditando(false)} 
            autoFocus
         />
        )}
        {!estaEditando &&(
            <span onDoubleClick={()=> setEstaEditando(true)}>
                {nomeTarefa}
            </span>
        )}
        <Botao 
        texto={<MdDelete/>} 
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick = {() => removerTarefa(id)}
        />
    </li>
    );
};

export { ListaTarefaItem };