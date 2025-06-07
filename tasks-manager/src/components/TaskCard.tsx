import { AiTwotoneDelete } from 'react-icons/ai';
import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';
import { FaPencil } from 'react-icons/fa6';
import TaskStatusButton from './TaskStatusBtn';

const TaskCard = ({ task }: { task: Task }) => {
    const { removeTask } = useTaskContext();

    return (
        <div className='flex flex-col p-4 border border-gray-300 rounded-lg shadow-sm' >
            <span>
                {task.title}
            </span>
            <TaskStatusButton task={task} />
            <span>
                {task.description}
            </span>
            <div className='flex gap-5'>
                <button onClick={() => removeTask(task.id)}><AiTwotoneDelete /></button>
                <button ><FaPencil /></button>
            </div>
        </div>

    );
};

export default TaskCard;