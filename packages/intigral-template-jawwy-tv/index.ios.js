import { AppRegistry, Platform } from 'react-native';
import App from './src/app';
import { Api } from 'renative';
import { IOS, FORM_FACTOR_MOBILE } from 'renative';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';

Api.platform = IOS;
Api.formFactor = FORM_FACTOR_MOBILE;

initNavigation({
    nativeMode: true
});

AppRegistry.registerComponent('App', () => App);
