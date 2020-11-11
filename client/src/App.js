import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SearchBooks from "./pages/SearchBooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SearchBooks />
    </div>
  );
}


export default App;
