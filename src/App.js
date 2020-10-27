import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dublin" />
        <footer>
          This project is created by{" "}
          <a href="https://github.com/anna262/my-app">
            Open-source code on GitHub
          </a>
          by Anna Szczek
        </footer>
      </div>
    </div>
  );
}

