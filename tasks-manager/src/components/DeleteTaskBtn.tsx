import { AiTwotoneDelete } from "react-icons/ai";
import { useTaskContext } from "../contexts/TasksContext";
import type { Task } from "../types/Task";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const DeleteTaskBtn = ({ task }: { task: Task }) => {
    const { removeTask } = useTaskContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleConfirm = () => {
        removeTask(task.id);
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}><AiTwotoneDelete /></button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md rounded bg-white p-6">
                        <DialogTitle className="text-lg font-bold">Confirm Action</DialogTitle>
                        <Description className="mt-2 text-sm text-gray-500">
                            Are you sure you want to delete task {task.id}?
                        </Description>
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-gray-200 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default DeleteTaskBtn;