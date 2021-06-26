import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TextLoop from "react-text-loop";

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
  return (
    <div className="infoBox fade-in-delay">
          <h5>Hi there 👋</h5><br/>
          <hr className="animated" align="left"></hr>
          <h3>I am a final year Computer Science student 
            studying at Ryerson University in Toronto, Canada.
          </h3><br/>
          <h3>I am particularly interested in the front-end perspective of <u>web development</u> & I want to further develop my skills to be able to
            articulate my ideas through <Link className="link" to="/projects">my work</Link>.
          </h3><br/>
          <h3>
            I am also seeking internship opportunities with a company that I can 
            grow & learn with. Please feel free to <Link className="link" to="/contact">reach out</Link> to me.
          </h3><br/>
          <h3>Dustin</h3>
    </div>
    );
}

function Projects() {
  return (
    <div className="infoBox fade-in-delay">

    </div>
  );
}

function Contact() {
  return <p>Feel free to reach me!</p>;
}

function Home() {
  return (
    <div className="container background fade-in-image">
      <div className="wrapper centered fade-in-delay">
        <h5> HI, I'M DUSTIN MA 👋 </h5>
        <hr className="animated" align="left"></hr>
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
