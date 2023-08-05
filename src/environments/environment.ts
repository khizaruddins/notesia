// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {API_URLS} from './api-urls';

export const environment = {
  production: false,
  APP: {
    // api backend base url
    BASE_URL: '',
    DOMAIN_URL: 'http://localhost:4200',
    API_URLS
  },
  firebase:  {
    apiKey: "AIzaSyBux3M2Nwp92A6L0wiu4DLk0Hbp5C_1HGc",
    authDomain: "firestore-d1845.firebaseapp.com",
    databaseURL: "https://firestore-d1845-default-rtdb.firebaseio.com",
    projectId: "firestore-d1845",
    storageBucket: "firestore-d1845.appspot.com",
    messagingSenderId: "914829067670",
    appId: "1:914829067670:web:ca76c1b66609d0021a09b7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
