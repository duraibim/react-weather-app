import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />

        <footer>
        This project was coded by Manal Alduraibi🐞 and is Open-sourced on {""} 
          <a
            href=".." 
            target="_blank"
            rel="noopener noreferrer"
          >  GitHub</a> and hosted on <a
          href=".." 
          target="_blank"
          rel="noopener noreferrer"
        > Netlify</a> 
          
          
          </footer> 
        </div>
    </div>
  );
}

export default App;
