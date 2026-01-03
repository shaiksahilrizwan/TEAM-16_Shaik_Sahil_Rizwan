# 📱 Smart Device Recommendation Assistant

> **Team Number:** 16
> **Team Name:** Vibe Engineers
> **Track:** Telecom (T9)
> **Hackathon:** AI Hackathon 2026 @ Vignan University

## 📖 Problem Statement
In the competitive telecom market, customers often struggle to choose the right mobile device that matches their specific needs (budget, 4G/5G capability, RAM, battery life, etc.). Manual filtering is tedious, and simple search filters often fail to understand the user's *intent* (e.g., "I need a phone for heavy gaming" vs. "I need a phone for travel").

**The Challenge:** Build an intelligent assistant that recommends mobile devices based on technical constraints and provides a natural language explanation for *why* a specific device is the best fit.

## 💡 Solution Overview
Our solution is a **Hybrid AI Recommendation Engine** that combines traditional Machine Learning with Generative AI to provide accurate and personalized results.

It operates in a two-stage pipeline:
1.  **Quantitative Analysis (ML):** We use a **Random Forest Classifier** to predict the price range of devices in our dataset. This allows us to intelligently filter thousands of options down to a "shortlist" of valid candidates based on the user's budget and hard constraints (RAM, 4G support).
2.  **Qualitative Analysis (GenAI):** We use **Google Gemini (via LangChain)** to act as a sales consultant. The LLM analyzes the shortlisted devices against the user's natural language intent (e.g., "I need a lightweight phone") to select the single best winner and explain the choice.

### Key Features
*   **Predictive Pricing:** Uses Scikit-Learn to categorize unlabelled devices into price tiers (Low, Medium, High, Premium).
*   **Smart Specs Filtering:** Automatically filters out devices that don't meet minimum RAM or connectivity requirements.
*   **Context-Aware Recommendation:** The AI understands nuances like "good for gaming" implies high RAM and battery, even if the user didn't explicitly set numbers.
*   **Full-Stack Interface:** A clean, modern Web UI (HTML/CSS/JS) powered by a high-performance FastAPI backend.

## 🛠️ Tech Stack
*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
*   **Backend:** Python, FastAPI
*   **Machine Learning:** Scikit-Learn (Random Forest Classifier), Pandas
*   **Generative AI:** LangChain, Google Gemini Pro
*   **Data Processing:** NumPy

## 👥 Team Members
*   Shaik Sahil Rizwan
*   Shaik Mohammad Akmal
*   Shaik Mohammad Siddiq

## 🚀 How to Run Locally

### 1. Prerequisites
*   Python 3.10+
*   Google Gemini API Key