import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useTaskContext } from "../contexts/TasksContext";
import type { Task } from "../types/Task";
import TaskCommentsDialog from "./TaskCommebtsDialog";


const TaskCommentsBtn = ({ task }: { task: Task }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { updateComments } = useTaskContext();
    const onClose = async (newComments: string[]) => {
        await updateComments(task, newComments);
        setIsOpen(false);



    }
    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <FaRegCommentDots />
            </button>
            <TaskCommentsDialog
                open={isOpen}
                onClose={onClose}
                task={task}
            />
        </>
    );
};

export default TaskCommentsBtn;
