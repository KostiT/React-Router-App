import React, { Component } from "react";

//This is where we bring the Router in play
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//This is the so called import secion, common in ES6, similar to Node's require
import Home from "./Home";
import About from "./About";
import Router from "./Router";
import Contact from "./Contact";

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Kosti´s Single Page App using Router</h1>

          {/* Here's where we route and specify the Navigation Links... */}
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/router">Router</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            {/* ...and finally assign paths and call the correct components as the routing attributes */}
            <Route exact path="/" component={Home}></Route> 
            <Route path="/about" component={About}></Route>
            <Route path="/router" component={Router}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
        </div>
        </HashRouter>
        
    );
  }
}
 
export default Main;