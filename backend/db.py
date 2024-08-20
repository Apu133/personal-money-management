from pymongo import MongoClient
import datetime
import calendar

client = MongoClient("mongodb://localhost:27017")

db = client["my_bank"]
collection = db["transactions"]

def create(data):
    data = dict(data)
    response = collection.insert_one(data)
    return str(response.inserted_id)

def delete(serial):
    response = collection.delete_one({"serial": serial})
    return response

def see_available_amount():
    positive = collection.find({"plus_negative":"plus"})
    total = 0
    for price in positive:
        total += price['amount']
    expenses = collection.find({"plus_negative": "negative"})
    deduction = 0
    for expense in expenses:
        deduction += expense["amount"]
    
    balance = total - deduction
    return balance

def usable():
    current_date = datetime.datetime.now()
    today = current_date.strftime("%d")

    today = int(today)

    current_year = current_date.year
    current_month = current_date.month

    # Get the number of days in the current month
    month_days = calendar.monthrange(current_year, current_month)[1]

    value = month_days - today

    positive = collection.find({"plus_negative":"plus"})
    total = 0
    for price in positive:
        total += price['amount']
    expenses = collection.find({"plus_negative": "negative"})
    deduction = 0
    for expense in expenses:
        deduction += expense["amount"]
    
    balance = total - deduction
    result = balance / value
    return result
    
def serial():
    reaction = collection.find({})
    total = 0
    for number in reaction:
        total += 1
    return total

user_data = db["user_login"]

def user_login(data):
    data = dict(data)
    name = data['username']
    passw = data['password']
    if name == "apu" and passw == "2809":
        return 1
    else:
        return 0