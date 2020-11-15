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
        <main>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}


export default App;
