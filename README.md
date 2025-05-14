# Event Registration System

A full-stack web application for event registration, featuring:
- User registration form with validation
- Data storage in MongoDB via Node.js/Express backend
- Admin dashboard to view and delete registrations
- User login authentication (frontend-based)
- Integrated AI-powered chatbot (Python Flask + DialoGPT)
- Responsive and modern UI

---

## Features

- **Home Page:** Welcome page with registration and chatbot widget
- **Registration:** Users can register for events; data is stored in MongoDB
- **Login:** Admin login to access the dashboard
- **Dashboard:** View and delete all registrations (admin only)
- **Chatbot:** AI chatbot powered by Python (DialoGPT) for user queries

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Chatbot:** Python, Flask, HuggingFace Transformers (DialoGPT)
- **Other:** CORS, Flask-CORS

---

## Setup Instructions

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd Darshan
```

### 2. Install Node.js dependencies

```sh
npm install
```

### 3. Install Python dependencies

```sh
pip install flask flask-cors transformers torch
```

### 4. Configure MongoDB

- Update your MongoDB connection string in `server.js`:
  ```js
  const mongoURI = 'mongodb+srv://<username>:<password>@<cluster-url>/<dbname>';
  ```

### 5. Start the servers

- **Node.js backend:**
  ```sh
  node server.js
  ```
- **Python chatbot:**
  ```sh
  python chatbot.py
  ```

### 6. Open the app

- Visit [http://localhost:5000/](http://localhost:5000/) in your browser.

---

## Usage

- **Register:** Fill out the registration form on the home page.
- **Login:** Click "User Login" and use the admin credentials (`admin` / `1234` by default).
- **Dashboard:** View and delete registrations.
- **Chatbot:** Ask questions in the chatbot widget (bottom right).

---

## File Structure

```
.
├── index.html           # Home page (welcome + chatbot)
├── event_registration.html
├── login.html
├── dashboard.html
├── server.js            # Node.js backend
├── chatbot.py           # Python chatbot backend
├── package.json
├── .gitignore
└── ...
```

---

## Notes

- `node_modules/`, `__pycache__/`, and other generated files are ignored via `.gitignore`.
- For production, implement secure authentication and environment variable management.

---

## License

MIT License
