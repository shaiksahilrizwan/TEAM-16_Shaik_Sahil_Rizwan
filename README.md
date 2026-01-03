# 📱 Smart Plan & Device Recommendation Assistant

> **Team Number:** [TEAM-16]
> **Team Name:** [Vibe Engineers]
> **Track:** Telecom (T9)
> **Hackathon:** AI Hackathon 2026 @ Vignan University

## 📖 Problem Statement
In the competitive telecom market, customers often struggle to choose the right mobile device and service plan that matches their specific needs (budget, 5G capability, RAM, battery life, etc.). Manual filtering is tedious, and static filters often fail to explain *why* a specific device is the best fit.

**The Challenge:** Build an intelligent assistant that recommends mobile devices and plans based on user constraints and provides a natural language explanation for the recommendation.

## 💡 Solution Overview
Our solution is a **Hybrid Recommendation Engine** that combines:
1.  **Machine Learning / Rule-Based Filtering:** To efficiently filter the dataset and identify devices that meet hard constraints (e.g., Price Range, RAM, 5G support).
2.  **Generative AI (LLM):** To act as a sales consultant. It takes the filtered technical data and generates a persuasive, human-readable explanation of *why* this phone fits the user's lifestyle.

### Key Features
*   **Smart Filtering:** Uses `pandas` and `scikit-learn` logic to narrow down thousands of options to the top candidates.
*   **AI "Vibe" Check:** Uses an LLM (via LangChain) to explain specs in plain English (e.g., translating "6000mAh battery" to "Lasts all day for heavy gaming").
*   **JSON Output:** Returns structured data for easy UI integration.

## 👥 Team Members
*   Shaik Sahil Rizwan
*   Shaik Mohammad Akmal
*   Shaik Mohammad Siddiq