export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    PENDING = 'PENDING',
    DONE = 'DONE'
}

export class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}