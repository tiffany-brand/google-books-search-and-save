import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Saved />
    </div>
  );
}


export default App;
