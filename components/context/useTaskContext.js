import { useContext } from 'react';
import { TaskContext } from './TaskProvider';

export default function useTaskContext() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('tentando acessar o contexto de tarefas fora do TasksProvider');
    }
    
    return context;
}