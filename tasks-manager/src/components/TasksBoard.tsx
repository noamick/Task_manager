import { useTaskContext } from '../contexts/TasksContext';
import { TaskStatus } from '../types/TasksStatus';
import CreateTaskBtn from './CreateTaskBtn';
import TasksList from './TasksLists';

const TasksBoard = () => {
    const { tasks } = useTaskContext();
    const newTasks = tasks.filter((t) => t.status === TaskStatus.new);
    const inProgressTasks = tasks.filter((t) => t.status === TaskStatus.inProgress);
    const finishedTasks = tasks.filter((t) => t.status === TaskStatus.finished);


    return (
        <div className='p-1 rounded gap-2 flex'>
            <TasksList tasks={newTasks}></TasksList>
            <TasksList tasks={inProgressTasks}></TasksList>
            <TasksList tasks={finishedTasks}></TasksList>
            <CreateTaskBtn></CreateTaskBtn>
        </div>
    );
};

export default TasksBoard;