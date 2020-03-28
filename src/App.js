import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Splash from './Splash';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import Login from './Login';

//function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jwtToken: 'INITIALjwtToken' }
  }

  setParentState = (argJWTToken) => {
    console.log(argJWTToken);
    console.log('here1');
    console.log(this.state.jwtToken);
    this.setState(() => ({jwtToken: argJWTToken}));
    console.log('here2');
    let x = this.state.jwtToken;
    console.log(x);
  }
  
  render() {
    return(
    <BrowserRouter>
      <div id="routing-app">
        <div>
          {window.$emailAddress}
        </div>
        <div>
          {window.$jwtToken}
        </div>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/Splash" />)} />
          <Route path="/Splash" component={Splash} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/TermsOfUse" component={TermsOfUse} />
          <Route path="/Login" render={
            props => <Login {...props} setParentState={this.setParentState} />
          } />
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
