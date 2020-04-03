import React from 'react';
import {hot} from 'react-hot-loader';
import {MuiThemeProvider} from '@material-ui/core/styles';
import App from '../_components/App';

const AppContainer = () => (
    <React.StrictMode>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </React.StrictMode>
);

export default hot(module)(AppContainer);