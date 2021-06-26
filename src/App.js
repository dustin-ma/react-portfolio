import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TextLoop from "react-text-loop";
import bgphoto from "images/bgf.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function AboutMe() {
  return <p>Stuff about me</p>;
}

function Projects() {
  return <p>My projects!</p>;
}

function Contact() {
  return <p>Feel free to reach me!</p>;
}

function Home() {
  return (
    <div className="container">
      <img src={bgphoto} alt=""/>
      <div className="wrapper">
        <h5> HI, I'M DUSTIN MA 🌲 </h5>
        <hr align="left"></hr>
        <TextLoop>
          <h3>ASPIRING FRONT END DEVELOPER</h3>
          <h3>COMPUTER SCIENCE STUDENT</h3>
          <h3>DESIGN ENTHUSIAST</h3>
        </TextLoop>
        <h2>📍 TORONTO, CANADA</h2>
      </div>
    </div>
  );
}
export default App;
