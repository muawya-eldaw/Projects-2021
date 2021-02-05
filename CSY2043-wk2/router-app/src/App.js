import react from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Study from './Study';
import Hobbies from './Hobbies';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">        
          <div>
            <Nav />
          </div>

          <div className="main_div"> 
            <Switch>       
              <Route path="/" exact component={Home} />
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/study" component={Study} />
              <Route path="/hobbies" component={Hobbies} />
            </Switch>
          </div>

          <div>
            <Nav />
          </div>
      </div>
   </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
