import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/store'
import "./scripts/index";
import './i18n/i18n';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOMClient
    .createRoot(
        document.getElementById('root')
    )
    .render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );

serviceWorker.unregister();
reportWebVitals(console.log);
