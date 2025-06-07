import React from 'react';
import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';
import { TaskStatus } from '../types/TasksStatus';
import TaskCard from './TaskCard';

const TasksList: React.FC = () => {
    const { tasks, addTask } = useTaskContext();

    const handleAddRandomTask = () => {
        const randomId = Math.floor(Math.random() * 10000);
        const newTask: Task = {
            id: randomId,
            title: `Task ${randomId}`,
            description: 'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat corporis autem vitae et quisquam aliquid provident? Nostrum, consequuntur saepe?',
            comments: [],
            status: TaskStatus.new,
        };
        addTask(newTask);
    };

    return (
        <div className='bg-blue-500 text-white p-1 rounded gap-2 flex flex-col max-w-md'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />

            ))}
            <button className='border border-gray-300 rounded-lg shadow-sm p-3' onClick={handleAddRandomTask}>Add Random Task</button>
        </div>
    );
};

export default TasksList;