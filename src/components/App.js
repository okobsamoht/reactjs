import React from 'react';
import './App.css';
import './App.scss';
import {
    BrowserRouter as Router,
    Route, Routes
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
          <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route path="/backdoor" element={<Backdoor/>} />
            <Route path="/stateful" element={<Stateful/>} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
  );
}

export default App;
