import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import { Api } from 'renative';
import { WEB, FORM_FACTOR_DESKTOP, registerServiceWorker } from 'renative';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
//import SpatialNavigation from './spatialNavigation';


Api.platform = WEB;
Api.formFactor = FORM_FACTOR_DESKTOP;

initNavigation({
    debug: true,
    visualDebug: false
});

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
