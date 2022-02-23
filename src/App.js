import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
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
