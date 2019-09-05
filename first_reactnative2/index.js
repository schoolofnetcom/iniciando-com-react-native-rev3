/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Log from 'react-native-android-log';

Log.setLevel(__DEV__ ? Log.VERBOSE : Log.WARN);
Log.i('Log INFO LEVEL');

AppRegistry.registerComponent(appName, () => App);
