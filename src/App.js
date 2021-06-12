import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar"
import Header from "./Component/Header"
import Bottom from "./Component/Bottom"
import {Education} from './Component/Education'
import {Projects} from './Component/Projects'
import {Contacts} from './Component/Contacts'
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
          <Route exact path="/">
            
              <Header/>
            
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>
    
    <Bottom/>
    </Router>
    </>
  );
}


export default App;
