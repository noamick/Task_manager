import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import type { Task } from "../types/Task";

interface Props {
    open: boolean;
    onClose: (newComments: string[]) => void;
    task: Task;
}

const TaskCommentsDialog = ({ open, onClose, task }: Props) => {
    const [comments, setComments] = useState<string[]>(task.comments || []);
    const [newComment, setNewComment] = useState("");

    const handleEdit = (index: number, updatedText: string) => {
        const updated = [...comments];
        updated[index] = updatedText;
        setComments(updated);
    };

    const handleDelete = (index: number) => {
        const updated = comments.filter((_, i) => i !== index);
        setComments(updated);
    };

    const handleAdd = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment("");
        }
    };

    return (
        <Dialog open={open} onClose={() => onClose(comments)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded bg-white p-6 space-y-4">
                    <DialogTitle className="text-lg font-bold">Comments</DialogTitle>

                    {comments.length === 0 ? (
                        <p className="text-gray-500">No comments yet.</p>
                    ) : (
                        comments.map((comment, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border p-2 rounded"
                            >
                                <input
                                    type="text"
                                    value={comment}
                                    onChange={(e) => handleEdit(index, e.target.value)}
                                    className="flex-1 mr-2 border px-2 py-1 rounded"
                                />
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-600 font-bold"
                                >
                                    ✖
                                </button>
                            </div>
                        ))
                    )}

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add new comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="flex-1 border px-2 py-1 rounded"
                        />
                        <button
                            onClick={handleAdd}
                            className="bg-blue-600 text-white px-3 rounded"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={() => onClose(comments)}
                            className="mt-4 px-4 py-2 bg-gray-200 rounded"
                        >
                            Close
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default TaskCommentsDialog;
