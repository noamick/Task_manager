import type { TaskStatus } from "./TasksStatus";

export interface Task {
    id: number;
    title: string;
    description: string;
    comments: string[];
    status: TaskStatus;
}