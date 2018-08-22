

import firebase from 'firebase';
import {config}   from './config';

var fire = firebase.initializeApp(config);
export default fire;