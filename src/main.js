import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import aboutme from "./Aboutme";
import Contact from "./Contant";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <br/>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/aboutme">About Me</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
           <Route exact path="/" component={Home}/>
          <Route path="/aboutme" component={aboutme}/>
          <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
