import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LandPage from './components/LandPage/LandPage';
import LandStats from './components/LandStats/LandStats';
import Garden from './components/Garden/Garden';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/user/home' exact component={LandPage} />
          <Route path='/user/stats' exact component={LandStats} />
          <Route path='/user/garden' exact component={Garden} />
          <Route path='/login' exact component={SignIn} />
          <Route path='/register' exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
