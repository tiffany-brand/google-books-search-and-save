import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Hero />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
