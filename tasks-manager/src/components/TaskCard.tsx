
import type { Task } from '../types/Task';
import DeleteTaskBtn from './DeleteTaskBtn';
import EditTaskBtn from './EditTaskBtn';
import HumTAsk from './HumTAsk';
import TaskStatusButton from './TaskStatusBtn';

const TaskCard = ({ task }: { task: Task }) => {
    return (
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl shadow-sm bg-white">
            <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
            <div className='flex gap-4'>
                <TaskStatusButton task={task} />
                <HumTAsk task={task} />
            </div>

            <p className="text-sm text-gray-600">{task.description}</p>

            <div className="flex gap-3 mt-2">
                <DeleteTaskBtn task={task} />
                <EditTaskBtn task={task} />
            </div>
        </div>

    );
};

export default TaskCard;