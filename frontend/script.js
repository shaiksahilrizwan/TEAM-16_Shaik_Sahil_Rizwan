document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('recForm');
    const resultSection = document.getElementById('resultSection');
    const loadingState = document.getElementById('loadingState');
    const successState = document.getElementById('successState');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Collect Data
        // Budget: Checkboxes
        const budgetNodes = document.querySelectorAll('input[name="budget"]:checked');
        let budgetRange = Array.from(budgetNodes).map(node => parseInt(node.value));
        
        // If no budget selected, default to all ranges [0, 1, 2, 3]
        if (budgetRange.length === 0) {
            budgetRange = [0, 1, 2, 3];
        }

        const minRam = document.getElementById('minRam').value;
        const require4G = document.getElementById('require4G').checked;
        const userIntent = document.getElementById('userIntent').value;

        // 2. Build Payload
        const payload = {
            "budget_range": budgetRange,
            "requires_4g": require4G,
            "min_ram": minRam ? parseInt(minRam) : 0,
            "user_intent": userIntent
        };

        // 3. Update UI State
        resultSection.classList.remove('hidden');
        loadingState.classList.remove('hidden');
        successState.classList.add('hidden');
        submitBtn.disabled = true;
        submitBtn.querySelector('span').innerText = "Processing...";

        try {
            // 4. Send Request to FastAPI Endpoint
            const response = await fetch('/api/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            // 5. Handle Response
            if (!response.ok || data.error) {
                alert(`Error: ${data.error || data.detail || 'Unknown error occurred'}`);
                resultSection.classList.add('hidden');
            } else {
                loadingState.classList.add('hidden');
                successState.classList.remove('hidden');

                // Update Fields
                // Handle selected_device being object or string
                let deviceName = "Unknown Device";
                if (data.selected_device) {
                    deviceName = typeof data.selected_device === 'object' 
                        ? (data.selected_device.name || `Device ID: ${data.selected_device.id}`) 
                        : data.selected_device;
                } else if (data.selected_device_id) {
                    deviceName = `Device ID: ${data.selected_device_id}`;
                }

                document.getElementById('resDeviceName').innerText = deviceName;
                document.getElementById('resIntent').innerText = data.user_intent;
                document.getElementById('resReasoning').innerText = data.reasoning;
                
                // Format confidence
                const conf = parseFloat(data.confidence_score) || 0;
                document.getElementById('resConfidence').innerText = Math.round(conf * 100) + "% Match";

                // Show raw JSON for debugging
                document.getElementById('rawJson').innerText = JSON.stringify(data, null, 2);
            }

        } catch (error) {
            console.error(error);
            alert("Failed to connect to the server. Is it running?");
            resultSection.classList.add('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.querySelector('span').innerText = "Find Recommendation";
        }
    });
});