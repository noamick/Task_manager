// import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';

const TaskStatusButton = ({ task }: { task: Task }) => {
    // const { } = useTaskContext();

    return (

        <button >{task.status}</button>
    );
};

export default TaskStatusButton;