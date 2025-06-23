import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTaskContext } from "../contexts/TasksContext";
import { Owner } from "../types/Owner";
import type { Task } from "../types/Task";

const humanColors: Record<string, string> = {
    [Owner.Rooth]: "bg-red-600",
    [Owner.Yanay]: "bg-yellow-600",
    [Owner.Lavi]: "bg-blue-600",
    [Owner.Yedidya]: "bg-green-600",
    [Owner.Elisheva]: "bg-pink-600",
    [Owner.Nir]: "bg-purple-600",
};


const HumTAsk = ({ task }: { task: Task }) => {
    const { updateOwner } = useTaskContext();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton
                className={`
                inline-flex items-center justify-center
                text-xs font-medium text-white
                ${humanColors[task.owner ?? ''] || 'bg-gray-600'}
                rounded px-2.5 py-1.5
                hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              `}>
                {task.owner}
            </MenuButton>

            <MenuItems className="absolute z-10 mt-1 w-44 origin-top-left flex flex-col 
            bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Object.values(Owner).map((newName) => (
                    <MenuItem
                        key={newName}
                        as="button"
                        onClick={() => updateOwner(task, newName)}
                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 
             data-[headlessui-state=active]:bg-blue-500
             data-[headlessui-state=active]:text-white">
                        {newName}
                    </MenuItem>

                ))}
            </MenuItems>
        </Menu>
    );
};

export default HumTAsk;
