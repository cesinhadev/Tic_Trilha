import { createContext, useEffect, useState } from 'react';
import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [criador, setCriador]   = useState('Cesar');

    const [tarefas, setTarefas] = useState([]);

    const carregarTarefas = async () => {
        const {data = []} = await api.get('/Tarefas');
        
        setTarefas([
            ...data,
        ]);
    };



    const adicionarTarefa = async(nomeTarefa) =>{
        const { data: tarefa } = await api.post('/Tarefas', {
            nome: nomeTarefa,
        });
        
        
        setTarefas(estatoAtual => {
            return [
                ...estatoAtual,
                tarefa,

            ];
        });
    }

    const removerTarefa = async(idTarefa) =>{

        await api.delete(`Tarefas/${idTarefa}`);

            setTarefas(estatoAtual => {
                const tarefasAtualizadas = estatoAtual.filter(tarefa => tarefa.id != idTarefa);


                return [
                    ...tarefasAtualizadas,
                ];
            });
    };

    const editarTarefa = async (idTarefa, nome) => {
        const {data: tarefaAtualizada} = await api.put(`Tarefas/${idTarefa}`,{
           nome: nome, 
        });
        
        
        
        setTarefas(estatoAtual => {
            const tarefasAtualizadas = estatoAtual.map(tarefa =>{
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nome:tarefaAtualizada.nome,
                } : tarefa;
            });

            return [
                ...tarefasAtualizadas,
            ];
        });
    };


    useEffect(() => {
        carregarTarefas();
    },[]);


    return(
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
        }}>

            {children}
        </AppContext.Provider>
    );
}

