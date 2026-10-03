import uuid
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.dialects.postgresql import UUID, JSONB
from app.core.database import Base

class CareerPath(Base):
    __tablename__ = "career_paths"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    trade_id = Column(String, ForeignKey("trades.id"), unique=True)
    title = Column(String)
    description = Column(String)

class CareerPathNode(Base):
    __tablename__ = "career_path_nodes"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    path_id = Column(UUID(as_uuid=True), ForeignKey("career_paths.id"))
    node_id = Column(String) # e.g., 'training', 'apprenticeship'
    title = Column(String)
    title_hi = Column(String, nullable=True)
    description = Column(String)
    description_hi = Column(String, nullable=True)
    duration = Column(String, nullable=True)
    income_range = Column(String, nullable=True)
    type = Column(String) # training, job, education

class CareerPathEdge(Base):
    __tablename__ = "career_path_edges"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    path_id = Column(UUID(as_uuid=True), ForeignKey("career_paths.id"))
    source = Column(String)
    target = Column(String)

class CareerScenario(Base):
    __tablename__ = "career_scenarios"
    
    id = Column(String, primary_key=True) # e.g., 'no-local-jobs'
    trade_id = Column(String, ForeignKey("trades.id"))
    title = Column(String)
    title_hi = Column(String)
    description = Column(String)
    description_hi = Column(String)
    trigger = Column(String)
    steps = JSONB # Store the steps
    alternative_paths = JSONB
