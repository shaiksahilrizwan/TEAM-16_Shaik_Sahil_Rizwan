# 1. Define User Input
from model import get_device_recommendation
import json
sample_input = {
        "budget_range": [2, 3],       
        "requires_4g": True,
        "min_ram": 3000,              
        "user_intent": "I need a gaming phone that is lightweight."
}

    # 2. Call Function
result_json = get_device_recommendation(sample_input)
    
    # 3. Print Result
print(json.dumps(result_json, indent=2))