import React from 'react';
import './App.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./Welcome";
import Backdoor from "./Backdoor";
import Stateful from "./Stateful";

function App(props) {
  return (
      <div className={'AppShell'} id={'AppShell'}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome/>
            </Route>
            <Route path="/backdoor">
              <Backdoor/>
            </Route>
            <Route path="/stateful">
              <Stateful/>
            </Route>
            <Route path="*">
              404
            </Route>
          </Switch>
        </Router>
        <ToastContainer />
      </div>
  );
}

export default App;
