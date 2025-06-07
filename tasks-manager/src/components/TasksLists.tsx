import type { Task } from '../types/Task';
import TaskCard from './TaskCard';

const TasksList = ({ tasks, title }: { tasks: Task[], title: string }) => {
    return (
        <div className="flex flex-col gap-4 h-full">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>

            <div className="flex flex-col gap-3 bg-blue-100 p-4 rounded-xl shadow-inner overflow-y-auto h-full">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksList;