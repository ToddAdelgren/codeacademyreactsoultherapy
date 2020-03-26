import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Splash from './Splash';

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
          {/*
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/detail/:id" component={TaskDetail} />
          <Route component={PageNotFound}/>
          */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
