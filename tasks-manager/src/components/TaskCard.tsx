import { FaPencil } from 'react-icons/fa6';
import TaskStatusButton from './TaskStatusBtn';
import DeleteTaskBtn from './DeleteTaskBtn';
import type { Task } from '../types/Task';

const TaskCard = ({ task }: { task: Task }) => {
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
                <DeleteTaskBtn task={task}></DeleteTaskBtn>
                <button ><FaPencil /></button>
            </div>
        </div>

    );
};

export default TaskCard;