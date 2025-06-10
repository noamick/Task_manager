from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import tasks_crud
from schemas import CreateTaskInput, TaskOutput, UpdateTaskInput

app = FastAPI()
# the func below help us to create akk the tables or change them if needed
models.Base.metadata.create_all(bind=models.engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# and this func help us to get access to the db
def get_db():
    db = models.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/tasks/")
def create_task(task: CreateTaskInput, db: Session = Depends(get_db)) -> TaskOutput:
    return tasks_crud.create_task(db=db, task=task)


@app.get("/tasks/{task_id}")
def read_task(task_id: int, db: Session = Depends(get_db)) -> TaskOutput:
    db_task = tasks_crud.get_task(db=db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task


@app.get("/tasks/")
def read_tasks(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
) -> list[TaskOutput]:
    tasks = tasks_crud.get_tasks(db=db, skip=skip, limit=limit)
    return tasks


@app.put("/tasks/{task_id}")
def update_task(
    task_id: int, task: UpdateTaskInput, db: Session = Depends(get_db)
) -> TaskOutput:
    db_task = tasks_crud.update_task(db=db, task_id=task_id, task=task)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task


@app.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)) -> TaskOutput:
    db_task = tasks_crud.delete_task(db=db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task
