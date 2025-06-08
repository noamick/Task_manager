import { Description, Dialog, DialogPanel, DialogTitle, Field, Input, Label } from "@headlessui/react";
import { useEffect, useState } from "react";
import type { Task } from "../types/Task";


interface EditTaskDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (title: string, description: string) => void;
    initialTask?: Task;
}

const EditTaskDialog = ({ open, onClose, onSave, initialTask }: EditTaskDialogProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDescription(initialTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [initialTask, open]);

    const handleSave = () => {
        onSave(title, description);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded bg-white p-6">
                    <DialogTitle className="text-lg font-bold">
                        {initialTask ? 'Edit Task' : 'New Task'}
                    </DialogTitle>
                    <Description className="mt-2 text-sm text-gray-500">
                        {initialTask ? 'Update the task details.' : 'Enter details for the new task.'}
                    </Description>
                    <div className="mt-4 space-y-4">
                        <Field>
                            <Label className="block text-sm font-medium text-gray-700">Title</Label>
                            <Input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </Field>
                        <Field>
                            <Label className="block text-sm font-medium text-gray-700">Description</Label>
                            <textarea
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="p-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </Field>
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            {initialTask ? 'Save' : 'Create Task'}
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
export default EditTaskDialog;