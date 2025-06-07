
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useTaskContext } from "../contexts/TasksContext";
import EditTaskDialog from "./EditTaskDialog";

const CreateTaskBtn = () => {
    const { createNewTask } = useTaskContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleEdit = (title: string, description: string) => {
        createNewTask(title, description);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all duration-200"
            >
                <IoAdd className="text-lg" />
                <span className="text-sm font-medium">Create Task</span>
            </button>
            <EditTaskDialog open={isOpen} onClose={() => setIsOpen(false)} onSave={handleEdit} ></EditTaskDialog>
        </>
    );
}

export default CreateTaskBtn;