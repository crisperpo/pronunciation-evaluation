# Pronounciation evaluation

A pronunciation evaluation demo built with a React client and an Express server

> **Note**: This application uses mocked data and does not perform real pronunciation analysis.

## 🚀 Features

### Frontend
A React-based frontend that interacts with the server to display pronunciation evaluation results.
It is made with React (using the scaffolding of create-react-app) and runs in port 8000.
As it works with mock data it will always return a "Well done, your score is 90%" feedback

### Backend
An Express.js server that serves mocked data for the frontend.
This server built with ExpressJS (Node JS) runs in port 3000 and provides the mocked evaluation data for the SPA.

### Mocked Evaluation
Simulates pronunciation scoring by always returning a fixed message:

  ```
  Well done, your score is 90%
  ```

## 🧰 Technologies Used

- React
- Express.js
- TypeScript
- SCSS

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/crisperpo/pronunciation-evaluation.git
   cd pronunciation-evaluation
   ```

2. **Install dependencies for both server and SPA**:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install SPA dependencies
   cd ../spa
   npm install
   ```

## 🏃 Usage

1. **Start the server**:

   ```bash
   cd server
   npm start
   ```

   The server will run on [http://localhost:3000](http://localhost:3000).

2. **Start the SPA**:

   ```bash
   cd ../spa
   npm start
   ```

   The SPA will run on [http://localhost:8000](http://localhost:8000).

Make sure both the server and SPA are running at the same time for full functionality.

## 📝 License

This project is licensed under the MIT License.

---

Built by [@crisperpo](https://github.com/crisperpo) with 💡

