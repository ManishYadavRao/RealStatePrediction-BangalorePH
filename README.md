# 🏠 Real Estate Price Prediction – Bangalore

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11-blue?logo=python">
  <img src="https://img.shields.io/badge/Flask-Web%20API-black?logo=flask">
  <img src="https://img.shields.io/badge/Machine%20Learning-Scikit--Learn-orange?logo=scikitlearn">
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen">
  <img src="https://img.shields.io/badge/License-MIT-green">
</p>

## 📖 Overview

This project is an end-to-end **Machine Learning Web Application** that predicts residential property prices in **Bangalore** based on:

- 📍 Location
- 📐 Total Square Feet
- 🛏 Number of Bedrooms (BHK)
- 🚿 Number of Bathrooms

The project demonstrates the complete machine learning pipeline—from data preprocessing and model training to deploying the trained model with **Flask** and integrating it with a web interface.

---

# 🚀 Demo

The application predicts house prices instantly after entering property details.

**Input**

- Location
- Square Feet
- BHK
- Bathrooms

⬇️

**Output**

Estimated House Price (in Lakhs)

---

# 📂 Project Structure

```
RealStatePrediction-BangalorePH
│
├── Client
│   ├── app.css
│   ├── app.html
│   └── app.js
│
├── Model
│   ├── banglore_home_prices_model.pickle
│   ├── bengaluru_house_prices.csv
│   ├── columns.json
│   └── projectRealHouse.ipynb
│
├── Server
│   ├── artifacts
│   ├── server.py
│   └── utils.py
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

# 📊 Dataset

The dataset contains residential property information collected from different locations across Bangalore.

### Features

- Location
- Total Square Feet
- BHK
- Bathrooms
- Price

Dataset preprocessing includes:

- Missing value handling
- Feature engineering
- One Hot Encoding
- Outlier removal
- Dimensionality reduction

---

# 🧠 Machine Learning Workflow

```
Raw Dataset
      │
      ▼
Data Cleaning
      │
      ▼
Feature Engineering
      │
      ▼
Outlier Detection & Removal
      │
      ▼
Model Training
      │
      ▼
Model Evaluation
      │
      ▼
Model Serialization (.pickle)
      │
      ▼
Flask REST API
      │
      ▼
Frontend Application
```

---

# ⚙️ Technologies Used

| Category | Technology |
|----------|------------|
| Language | Python |
| Machine Learning | Scikit-Learn |
| Backend | Flask |
| Frontend | HTML, CSS, JavaScript |
| Data Analysis | Pandas |
| Numerical Computing | NumPy |
| Notebook | Jupyter |
| Version Control | Git & GitHub |
| IDE | PyCharm |

---

# 📈 Model

Models evaluated during development include:

- Linear Regression
- Lasso Regression
- Decision Tree Regression

The best-performing model was exported as:

```
banglore_home_prices_model.pickle
```

---

# 🌐 REST API

### Predict House Price

```
POST /predict_home_price
```

Example Input

```json
{
    "location":"1st Phase JP Nagar",
    "total_sqft":1200,
    "bhk":2,
    "bath":2
}
```

Example Output

```json
{
    "estimated_price":86.5
}
```

---

# 💻 Installation

Clone the repository

```bash
git clone https://github.com/ManishYadavRao/RealStatePrediction-BangalorePH.git
```

Move into the project

```bash
cd RealStatePrediction-BangalorePH
```

Install dependencies

```bash
pip install -r requirements.txt
```

Start Flask Server

```bash
cd Server
python server.py
```

Open

```
http://127.0.0.1:5000
```

---

# ✨ Features

- ✔ House Price Prediction
- ✔ Dynamic Location Selection
- ✔ Responsive User Interface
- ✔ REST API using Flask
- ✔ Machine Learning Model
- ✔ JSON-based Prediction
- ✔ Easy Deployment

---

# 📸 Screenshots

Create a folder named

```
screenshots
```

Add screenshots like

```
screenshots/
│
├── home.png
├── prediction.png
└── result.png
```

Then display them in the README.

```markdown
# 📸 Screenshots

## Home Page

![Home Page](screenshots/home_page.png)
<img width="832" height="577" alt="Screenshot 2026-07-04 092137" src="https://github.com/user-attachments/assets/0cba0683-5296-4895-b6ba-7b77052cc561" />

---

## Input Property Details

![Input](screenshots/input_values.png)
<img width="1056" height="642" alt="Screenshot 2026-07-04 092152" src="https://github.com/user-attachments/assets/8e6c5320-8084-4452-8ebe-3972218cf44d" />

---

## Predicted House Price

![Prediction](screenshots/prediction_result.png)
<img width="1312" height="665" alt="Screenshot 2026-07-04 092222" src="https://github.com/user-attachments/assets/d24c5e10-183c-4f7a-9759-347910d36a80" />

---


# 📚 What I Learned

- Data Cleaning
- Feature Engineering
- Outlier Detection
- Machine Learning
- Model Serialization
- Flask API Development
- Frontend Integration
- REST API Communication
- Git & GitHub

---

# 🙏 Acknowledgements

This project was developed as part of my Machine Learning learning journey.

Special thanks to the **Codebasics** YouTube channel and repository for providing the educational content and project inspiration that helped me understand and build this end-to-end application.

---

# 👨‍💻 Author

**Manish Yadav**

GitHub

https://github.com/ManishYadavRao

---

## ⭐ If you found this project useful

Please consider giving it a **Star ⭐**.

It motivates me to build more Machine Learning and AI projects.
