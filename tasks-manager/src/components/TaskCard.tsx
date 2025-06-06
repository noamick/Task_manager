import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';

const TaskCard = ({ task }: { task: Task }) => {
    const { removeTask } = useTaskContext();

    return (
        <div >
            {task.title}
            <button onClick={() => removeTask(task.id)}>Remove</button>
        </div>

    );
};

export default TaskCard;