import React from 'react';
import './App.css';
import './App.scss';
import {
    BrowserRouter,
    Route, Routes
} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./Welcome";
import Backdoor from "./Backdoor";
import Stateful from "./Stateful";
import Auth from "./Auth";

function App(props) {
  return (
      <div className={'AppShell'} id={'AppShell'}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/backdoor" element={<Backdoor/>} />
            <Route path="/stateful" element={<Stateful/>} />
            <Route path="/auth/*" element={<Auth/>} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
  );
}

export default App;
