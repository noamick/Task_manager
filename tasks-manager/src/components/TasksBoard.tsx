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
        <div className='flex flex-col w-full h-screen items-center justify-center'>
            <h1 className='mt-10 text-4xl'>Tasks Manager</h1>
            <div className='flex flex-col flex-1 p-12 w-full gap-2 items-stretch'>
                <div className='p-1 rounded flex gap-2 flex-1'>
                    <div className='flex-1'>
                        <TasksList tasks={newTasks} title='New Tasks'></TasksList>
                    </div>
                    <div className='flex-1'>
                        <TasksList tasks={inProgressTasks} title='In Progress Tasks'></TasksList>
                    </div>
                    <div className='flex-1'>
                        <TasksList tasks={finishedTasks} title='Finished Tasks'></TasksList>
                    </div>
                </div>
                <div>
                    <CreateTaskBtn></CreateTaskBtn>
                </div>
            </div>
        </div>
    );
};

export default TasksBoard;