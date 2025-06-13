import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTaskContext } from "../contexts/TasksContext";
import type { Task } from "../types/Task";


const possibleOwners: (string | null)[] = [
    null,
    'Rooth',
    'Yanay',
    'Lavi-Aharon',
    'Yedidya-Shlomo',
    'Elisheva-Alma',
    'Nir-Golan'
]

const humanColors: Record<string, string> = {
    'Rooth': "bg-red-600",
    'Yanay': "bg-yellow-600",
    'Lavi-Aharon': "bg-blue-600",
    'Yedidya-Shlomo': "bg-green-600",
    'Elisheva-Alma': "bg-pink-600",
    'Nir-Golan': "bg-purple-600",
};


const OwnerBtn = ({ task }: { task: Task }) => {
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
                {task.owner ?? 'No Owner'}
            </MenuButton>

            <MenuItems className="absolute z-10 mt-1 w-44 origin-top-left flex flex-col 
            bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {possibleOwners.map((possibleOwner) => (
                    <MenuItem
                        key={possibleOwner}
                        as="button"
                        onClick={() => updateOwner(task, possibleOwner)}
                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 
             data-[headlessui-state=active]:bg-blue-500
             data-[headlessui-state=active]:text-white">
                        {possibleOwner ?? 'No Owner'}
                    </MenuItem>

                ))}
            </MenuItems>
        </Menu>
    );
};

export default OwnerBtn;
