import { AiTwotoneDelete } from 'react-icons/ai';
import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';
import { FaPencil } from 'react-icons/fa6';
import TaskStatusButton from './TaskStatusBtn';

const TaskCard = ({ task }: { task: Task }) => {
    const { removeTask } = useTaskContext();

    return (
        <div >
            <span>
                {task.title}
            </span>
            <span>
                {task.description}
            </span>
            <button onClick={() => removeTask(task.id)}><AiTwotoneDelete /></button>
            <button ><FaPencil /></button>
            <TaskStatusButton task={task} />
        </div>

    );
};

export default TaskCard;