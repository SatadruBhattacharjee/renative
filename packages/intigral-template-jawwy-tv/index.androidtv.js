import { AppRegistry, Platform } from 'react-native';
import App from './src/app';
import { Api } from 'renative';
import { ANDROID_TV, FORM_FACTOR_TV } from 'renative';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';

Api.platform = ANDROID_TV;
Api.formFactor = FORM_FACTOR_TV;

initNavigation({
    nativeMode: true
});

AppRegistry.registerComponent('App', () => App);
