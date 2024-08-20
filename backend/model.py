from pydantic import BaseModel

class user(BaseModel):
    serial: int
    amount: int
    description: str
    plus_negative: str

class login(BaseModel):
    username: str
    password: str