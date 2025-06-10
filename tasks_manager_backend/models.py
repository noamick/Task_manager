from sqlalchemy import JSON, Column, Enum, Integer, String, Text, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from enums.tasks_status_enum import TaskStatus

# MySQL connection URL
DATABASE_URL = (
    "mysql+pymysql://taskmanager:taskmanagerpassword@localhost:3306/taskmanagerdatabase"
)

# Create SQLAlchemy engine
engine = create_engine(
    DATABASE_URL, pool_size=5, max_overflow=10, pool_timeout=30, pool_recycle=1800
)

# Create session local class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    description = Column(Text)
    comments = Column(JSON, default=list)
    status = Column(Enum(TaskStatus), default=TaskStatus.NEW)
    human = Column(String(100))

    def __repr__(self):
        return f"<Task(id={self.id}, title={self.title}, status={self.status})>"
