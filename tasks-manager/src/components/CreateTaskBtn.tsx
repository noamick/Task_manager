
import { useTaskContext } from "../contexts/TasksContext";
import { useState } from "react";
import EditTaskDialog from "./EditTaskDialog";
import { IoAdd } from "react-icons/io5";

const CreateTaskBtn = () => {
    const { createNewTask } = useTaskContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleEdit = (title: string, description: string) => {
        createNewTask(title, description);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}><IoAdd />Create Task</button>
            <EditTaskDialog open={isOpen} onClose={() => setIsOpen(false)} onSave={handleEdit} ></EditTaskDialog>
        </>
    );
}

export default CreateTaskBtn;