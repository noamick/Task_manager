import { useTaskContext } from '../contexts/TasksContext';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import type { Task } from '../types/Task';
import { TaskStatus } from '../types/TasksStatus';

const TaskStatusButton = ({ task }: { task: Task }) => {
    const { updateStatus } = useTaskContext();

    return (
        <Menu>
            <MenuHandler>
                <Button variant="outlined" className="capitalize" >{task.status}</Button>
            </MenuHandler>
            <MenuList>
                <MenuItem type='button' onClick={() => updateStatus(task.id, TaskStatus.new)}><span>new</span></MenuItem>
                <MenuItem onClick={() => updateStatus('in progres')}>in progres</MenuItem>
                <MenuItem>finished</MenuItem>
            </MenuList>
        </Menu>

    );
};

export default TaskStatusButton;