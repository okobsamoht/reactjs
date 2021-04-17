import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/store'
import "./scripts/index";
import './locales/i18n';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <App/>
                </BaseProvider>
            </StyletronProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals(console.log);
