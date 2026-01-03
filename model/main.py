from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from typing import List
import os
from model.Model import get_device_recommendation

app = FastAPI(title="Device Recommendation API")
#Mounting static files
app.mount("/static", StaticFiles(directory="frontend"), name="static")

# Define Input Schema
class UserInput(BaseModel):
    budget_range: List[int] = Field(..., description="List of price ranges e.g. [0, 1, 2, 3]")
    requires_4g: bool = Field(False, description="Whether 4G is required")
    min_ram: int = Field(0, description="Minimum RAM in MB")
    user_intent: str = Field(..., description="Text description of user needs")
# serve endpoint
@app.get("/")
def read_root():
    return FileResponse('frontend/index.html')

@app.post("/recommend")
def recommend_device(input_data: UserInput):
    input_dict = input_data.dict()
    result = get_device_recommendation(input_dict)
    
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
        
    return result