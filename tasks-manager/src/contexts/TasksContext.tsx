import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from "../types/Task";
import { TaskStatus } from "../types/TasksStatus";

export interface TasksContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    clearTasks: () => void;
    updateTitle: (id: number, newTitle: string) => void;
    updateDescrption: (id: number, newTitle: string) => void;
    updateStatus: (id: number, newStatus: TaskStatus) => void;
}

const TaskContext = createContext<TasksContextType | null>(null);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
    const clearTasks = () => setTasks([]);
    const removeTask = (id: number) => setTasks((prev) => prev.filter((t) => t.id !== id));
    const updateTitle = (id: number, newTitle: string) => {
        setTasks((prev) => {
            return prev.map(t => {
                if (t.id === id) {
                    return { ...t, title: newTitle };
                }
                else {
                    return t;
                }
            })
        })
    }
    const updateDescrption = (id: number, newDescription: string) => setTasks((prev) => prev.map(t => t.id === id ? { ...t, description: newDescription } : t))
    const updateStatus = (id: number, newStatus: TaskStatus) => setTasks((prev) => prev.map(t => t.id === id ? { ...t, status: newStatus } : t))
    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks, updateTitle, updateDescrption, updateStatus }}>
            {children}
        </TaskContext.Provider>
    );
};
export const useTaskContext = (): TasksContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used a TaskProvider');
    }
    return context;
};




