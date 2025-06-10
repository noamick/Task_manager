
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useTaskContext } from "../contexts/TasksContext";
import type { Task } from "../types/Task";
import EditTaskDialog from "./EditTaskDialog";

const EditTaskBtn = ({ task }: { task: Task }) => {
    const { updateTitleAndDescription } = useTaskContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleEdit = (title: string, description: string) => {
        updateTitleAndDescription(task, title, description);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}><FaPencil /></button>
            <EditTaskDialog open={isOpen} onClose={() => setIsOpen(false)} onSave={handleEdit} initialTask={task}></EditTaskDialog>
        </>
    );
}

export default EditTaskBtn;