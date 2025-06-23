import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Task, TaskWithoutId } from "../types/Task";
import { TaskStatus } from "../types/TasksStatus";
import { createTaskApi, deleteTaskApi, readTasksApi, updateTaskApi } from "../utils/tasksApi";

export interface TasksContextType {
    tasks: Task[];
    addTask: (task: Task) => Promise<void>;
    removeTask: (id: number) => Promise<void>;
    updateTitleAndDescription: (task: Task, newTitle: string, newDescription: string) => Promise<void>;
    updateStatus: (task: Task, newStatus: TaskStatus) => Promise<void>;
    createNewTask: (title: string, description: string) => Promise<void>;
    updateOwner: (task: Task, newName: string | null) => Promise<void>;
}

const TaskContext = createContext<TasksContextType | null>(null);

export const TasksProvider = ({ children }: { children: ReactNode }) => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const loadTasks = async () => {
        setTasks(await readTasksApi());
    }

    useEffect(() => {
        loadTasks();
    }, []);

    const addTask = async (task: TaskWithoutId) => {
        await createTaskApi(task);
        await loadTasks();
    };

    const createNewTask = async (title: string, description: string) => {
        await addTask({
            title,
            description,
            status: TaskStatus.new,
            comments: [],
            owner: ''
        });
    };

    const removeTask = async (id: number) => {
        await deleteTaskApi(id);
        await loadTasks();
    }

    const updateTitleAndDescription = async (task: Task, newTitle: string, newDescription: string) => {
        await updateTaskApi(task.id, {
            title: newTitle,
            description: newDescription,
            status: task.status,
            comments: task.comments,
            owner: task.owner,
        });
        await loadTasks();
    }

    const updateOwner = async (task: Task, newOwner: string | null) => {
        await updateTaskApi(task.id, {
            title: task.title,
            description: task.description,
            status: task.status,
            comments: task.comments,
            owner: newOwner,
        });
        await loadTasks();
    };

    const updateStatus = async (task: Task, newStatus: TaskStatus) => {
        await updateTaskApi(task.id, {
            title: task.title,
            description: task.description,
            status: newStatus,
            comments: task.comments,
            owner: task.owner,
        });
        await loadTasks();
    }
    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTitleAndDescription, updateStatus, createNewTask, updateOwner }}>
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




