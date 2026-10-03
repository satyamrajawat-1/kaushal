import uuid
from sqlalchemy import Column, String, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, JSONB
from app.core.database import Base

class TrainingProvider(Base):
    __tablename__ = "training_providers"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, index=True)
    type = Column(String) # government, private, ITI, etc.
    state = Column(String, index=True)
    district = Column(String, index=True)
    address = Column(String)
    trade_ids = Column(JSONB, default=list) # List of trade string IDs
    contact_info = Column(JSONB, nullable=True)
    verification_status = Column(String, default="estimated") # verified, estimated, limited

class Employer(Base):
    __tablename__ = "employers"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String)
    type = Column(String)
    location = Column(String)
