import { useTaskContext } from '../contexts/TasksContext';
import type { Task } from '../types/Task';
import { TaskStatus } from '../types/TasksStatus';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const TaskStatusButton = ({ task }: { task: Task }) => {
    const { updateStatus } = useTaskContext();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex justify-center w-full px-4 py-2 bg-blue-600 text-white rounded">
                {task.status}
            </MenuButton>
            <MenuItems
                anchor="bottom start"
                className="absolute mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg focus:outline-none"
            >
                {Object.values(TaskStatus).map((val: TaskStatus) => (
                    <MenuItem key={val}>
                        <button
                            onClick={() => updateStatus(task.id, val)}
                            className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-blue-500 data-[focus]:text-white"
                        >
                            {val}
                        </button>
                    </MenuItem>

                ))}

            </MenuItems>
        </Menu>
    );
};

export default TaskStatusButton;