import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/get-audio-transcription").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
