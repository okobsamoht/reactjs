import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./components/Welcome";
import Backdoor from "./components/Backdoor";

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
