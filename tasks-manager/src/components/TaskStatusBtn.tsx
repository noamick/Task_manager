import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';
import { TaskStatus } from '../types/TasksStatus';

const TaskStatusButton = ({ task }: { task: Task }) => {
    const { updateStatus } = useTaskContext();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton
                className="
                inline-flex items-center justify-center
                text-xs font-medium text-white bg-blue-800
                rounded px-2.5 py-1.5
                hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {task.status}
            </MenuButton>

            <MenuItems className="absolute z-10 mt-1 w-44 origin-top-left flex flex-col 
            bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Object.values(TaskStatus).map((status) => (
                    <MenuItem
                        key={status}
                        as="button"
                        onClick={() => updateStatus(task.id, status)}
                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 
             data-[headlessui-state=active]:bg-blue-500
             data-[headlessui-state=active]:text-white">
                        {status}
                    </MenuItem>

                ))}
            </MenuItems>
        </Menu>
    );
};

export default TaskStatusButton;
