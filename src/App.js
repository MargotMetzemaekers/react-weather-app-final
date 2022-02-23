import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded{" "}
          <a
            href="https://flamboyant-spence-8e4da6.netlify.app/"
            target="_blank"
          >
            by Margot Metzemaekers
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
