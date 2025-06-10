from enum import StrEnum


class TaskStatus(StrEnum):
    NEW = "new"
    IN_PROGRESS = "in_progress"
    FINISHED = "finished"

    def __str__(self):
        return self.value
