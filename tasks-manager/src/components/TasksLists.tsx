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
            description: '',
            comments: [],
            status: TaskStatus.new,
        };
        addTask(newTask);
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />

                ))}
            </ul>
            <button onClick={handleAddRandomTask}>Add Random Task</button>
        </div>
    );
};

export default TasksList;