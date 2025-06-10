from typing import List, Optional

from pydantic import BaseModel

from enums.tasks_status_enum import TaskStatus


class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    comments: Optional[List[str]] = []
    status: TaskStatus = TaskStatus.NEW
    human: str


class CreateTaskInput(TaskBase):
    pass


class UpdateTaskInput(TaskBase):
    pass


class TaskOutput(TaskBase):
    id: int
