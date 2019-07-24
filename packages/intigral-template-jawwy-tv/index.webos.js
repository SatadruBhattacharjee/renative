import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from 'renative';
import { WEBOS, FORM_FACTOR_TV, PLATFORM_GROUP_SMARTTV, registerServiceWorker } from 'renative';
import App from './src/app';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';

Api.platform = WEBOS;
Api.formFactor = FORM_FACTOR_TV;
Api.platformGroup = PLATFORM_GROUP_SMARTTV;

initNavigation({
    debug: true,
    visualDebug: false
});

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
