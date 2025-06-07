import type { Task } from '../types/Task';
import TaskCard from './TaskCard';

const TasksList = ({ tasks }: { tasks: Task[] }) => {
    return (
        <div className='bg-blue-500 text-white p-1 rounded gap-2 flex flex-col max-w-md'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />

            ))}

        </div>
    );
};

export default TasksList;