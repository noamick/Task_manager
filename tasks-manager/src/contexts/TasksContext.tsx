import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../types/Task";
import { TaskStatus } from "../types/TasksStatus";

export interface TasksContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    clearTasks: () => void;
    updateTitleAndDescription: (id: number, newTitle: string, newDescription: string) => void;
    updateStatus: (id: number, newStatus: TaskStatus) => void;
    createNewTask: (title: string, description: string) => void;
}

const TaskContext = createContext<TasksContextType | null>(null);

export const TasksProvider = ({ children }: { children: ReactNode }) => {


    const [tasksMaxId, setTasksMaxId] = useState<number>(() => {
        const stored = localStorage.getItem('tasksMaxId');
        if (stored) {
            try {
                return +stored;
            } catch (e) {
                console.error('Failed to parse tasks from localStorage:', e);
            }
        }
        return 1;

    });

    useEffect(() => {
        localStorage.setItem('tasksMaxId', tasksMaxId.toString());
    }, [tasksMaxId]);


    const [tasks, setTasks] = useState<Task[]>(() => {
        const stored = localStorage.getItem('tasks');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error('Failed to parse tasks from localStorage:', e);
            }
        }
        return [];

    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
    const createNewTask = (title: string, description: string) => {
        const currentTaskId = tasksMaxId;
        setTasksMaxId(currentTaskId + 1);
        addTask({
            id: currentTaskId,
            title,
            description,
            status: TaskStatus.new,
            comments: [],
        })
    };
    const clearTasks = () => setTasks([]);
    const removeTask = (id: number) => setTasks((prev) => prev.filter((t) => t.id !== id));
    const updateTitleAndDescription = (id: number, newTitle: string, newDescription: string) => {
        setTasks((prev) => {
            return prev.map(t => {
                if (t.id === id) {
                    return { ...t, title: newTitle, description: newDescription };
                }
                else {
                    return t;
                }
            })
        })
    }

    const updateStatus = (id: number, newStatus: TaskStatus) => setTasks((prev) => prev.map(t => t.id === id ? { ...t, status: newStatus } : t))
    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks, updateTitleAndDescription, updateStatus, createNewTask }}>
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




