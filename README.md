# Trading Dashboard Frontend

## 📌 Project Overview

This project is the **frontend application** for the Trading Dashboard, built as part of the **ALX Software Engineering Capstone Project**.

The frontend provides a responsive user interface for viewing trading data such as assets, portfolios, and trades, and consumes REST APIs exposed by the backend service.

The focus of this phase is on **UI structure, responsiveness, routing, and API integration**, rather than full production-ready features.

---

## 🎯 Project Objectives

- Build a clean and responsive trading dashboard UI
- Implement client-side routing for core pages
- Consume backend API endpoints
- Demonstrate frontend engineering skills using React
- Ensure mobile and desktop responsiveness

---

## 🛠️ Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Routing:** React Router
- **Charts:** Recharts (placeholder usage)
- **Version Control:** Git & GitHub
- **Deployment:** Vercel

---

## 🗂️ Project Structure

src/
│
├─ components/
│ ├─ Sidebar.jsx
│ ├─ dashboard/
│ ├─ portfolio/
│ ├─ trades/
│ └─ ui/ # shadcn/ui components
│
├─ pages/
│ ├─ Dashboard.jsx
│ ├─ Portfolio.jsx
│ └─ Trades.jsx
│
├─ lib/
│ └─ api.js # API helper functions
│
├─ providers/
│ └─ ThemeProvider.jsx
│
├─ App.jsx
├─ main.jsx
└─ index.css

---

## 📄 Pages Implemented

### Dashboard
- Account summary cards
- Placeholder sections for performance and recent trades
- Responsive layout

### Portfolio
- Portfolio summary statistics
- Holdings table
- Placeholder chart for asset allocation

### Trades
- Asset list fetched from backend API
- Trade table
- Trade form (basic structure)

---

## 📱 Responsive Design

- Fully responsive layout
- Sidebar navigation on desktop
- Mobile menu with toggle button
- Optimized for small screens using Tailwind breakpoints

---

## 🔌 Backend Integration

The frontend consumes data from the backend API, including:
- Asset list
- Trades data
- Portfolio information

API base URL is configurable in `src/lib/api.js`.

---

## 🚀 Running the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Aneke-Elvis/alx_capstone_fe.git
cd alx_capstone_fe

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev

🌍 Deployment

The frontend is deployed using Vercel.

Live demo:
👉 https://tradingdashboardfrontend-git-main-anekes-projects.vercel.app?_vercel_share=3dQeunt8Pi2mkuRWiRCZs2pnr5A7QbNL

⚠️ Notes

Authentication is not fully implemented yet

Some charts and advanced analytics are placeholders

This project represents a work in progress, as expected for the capstone stage

👨‍💻 Author

Name: Aneke Elvis
ALX Software Engineering Program – Capstone Project

📄 License

This project is for educational purposes only.