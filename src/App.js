import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rotterdam" />
        <footer>
          This project was coded{" "}
          <a href="https://github.com/MargotMetzemaekers" target="_blank">
            open-source on GitHub
          </a>
          by Margot Metzemaekers 👩‍💻 and hosted on{" "}
          <a
            href="https://app.netlify.com/teams/margotmetzemaekers/overview"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
