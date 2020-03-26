import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Splash from './Splash';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';

function App() {
  return (
    <BrowserRouter>
      <div id="routing-app">
        {/*
        <h1>Routing App</h1>
        <nav>
          <Link to="/dashboard">Dashboard</Link> | 
          <Link to="/tasks">Tasks</Link>
        </nav>
        */}

        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/Splash" />)} />
          <Route path="/Splash" component={Splash} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/TermsOfUse" component={TermsOfUse} />
          {/*
          <Route path="/detail/:id" component={TaskDetail} />
          <Route component={PageNotFound}/>
          */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
