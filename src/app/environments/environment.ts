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
  firebase: {
    projectId: 'firestore-d1845',
    appId: '1:914829067670:web:ca76c1b66609d0021a09b7',
    databaseURL: 'https://firestore-d1845-default-rtdb.firebaseio.com',
    storageBucket: 'firestore-d1845.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBux3M2Nwp92A6L0wiu4DLk0Hbp5C_1HGc',
    authDomain: 'firestore-d1845.firebaseapp.com',
    messagingSenderId: '914829067670',
  },
  supabaseCreds: {
    dbPassword: 'hZyg+~b9@GPZLJ2',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXRsZ3FrbHZ5YnZxcWpwZ3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NTk3MzYsImV4cCI6MjAxNjEzNTczNn0.P6xLFvPbwcTenFYXDdTrHQZ0xZcpC4y3lTqsqdYjBZA',
    url: 'https://isutlgqklvybvqqjpgpf.supabase.co'
  },
  tinymce: {
    apiKey: "4m2guy6ekhhk2lvpkz8lz22fwozhfk2s0fcbz0ln18d14z7a"
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
