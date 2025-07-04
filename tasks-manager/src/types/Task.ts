import type { TaskStatus } from "./TasksStatus";

export interface TaskWithoutId {
    owner: string;
    title: string;
    description: string;
    comments: string[];
    status: TaskStatus;
}

export interface Task extends TaskWithoutId {
    id: number;
}