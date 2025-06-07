
import TaskStatusButton from './TaskStatusBtn';
import DeleteTaskBtn from './DeleteTaskBtn';
import type { Task } from '../types/Task';
import EditTaskBtn from './EditTaskBtn';

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
                <EditTaskBtn task={task}></EditTaskBtn>

            </div>
        </div>

    );
};

export default TaskCard;