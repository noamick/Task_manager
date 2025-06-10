// src/types/tasksApi.ts

import type { Task, TaskWithoutId } from "../types/Task";


const BASE = "http://127.0.0.1:8000/tasks";

async function request<T>(
    path: string,
    options?: { method?: string; body?: object }
): Promise<T> {
    const res = await fetch(path, {
        method: options?.method,
        headers: options?.body
            ? { "Content-Type": "application/json" }
            : undefined,
        body: options?.body != null ? JSON.stringify(options.body) : undefined,
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP ${res.status}: ${errorText}`);
    }
    return res.json() as Promise<T>;
}

export function createTaskApi(input: TaskWithoutId): Promise<Task> {
    return request<Task>(`${BASE}/`, { method: "POST", body: input });
}

export function readTasksApi(): Promise<Task[]> {
    return request<Task[]>(`${BASE}/`);
}

export function readTaskApi(task_id: number): Promise<Task> {
    return request<Task>(`${BASE}/${task_id}`);
}

export function updateTaskApi(
    task_id: number,
    input: TaskWithoutId
): Promise<Task> {
    return request<Task>(`${BASE}/${task_id}`, {
        method: "PUT",
        body: input,
    });
}

export function deleteTaskApi(task_id: number): Promise<Task> {
    return request<Task>(`${BASE}/${task_id}`, { method: "DELETE" });
}
