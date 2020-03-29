import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Splash from './Splash';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import Login from './Login';

class App extends React.Component {
  render() {
    return(
    <BrowserRouter>
      <div id="routing-app">
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/Splash" />)} />
          <Route path="/Splash" component={Splash} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/TermsOfUse" component={TermsOfUse} />
          <Route path="/Login" component={Login} />
          {/*
          <Route path="/detail/:id" component={TaskDetail} />
          <Route component={PageNotFound}/>
          */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
