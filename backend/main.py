from fastapi import FastAPI
import db
from model import user, login
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/create")
async def insert_data(data: user):
    id = db.create(data)
    return {id}

@app.post("/delete")
async def delete_data(serial: int):
    data = db.delete(serial)
    return {"message": "Deletion successful."}

@app.get("/see_balance")
async def available_balance():
    data = db.see_available_amount()
    return {data}

@app.get("/per_day_balance")
async def usable():
    result = db.usable()
    data = int(result)
    return {data}

@app.get("/get_serial")
async def get_serial():
    result = db.serial()
    data = result + 1
    data = int(data)
    return {data}

@app.get("/login")
async def user_login(data: login):
    password = db.user_login(data)
    return {password}