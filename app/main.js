'use strict';

const config = {
    apiKey: "AIzaSyD4z1PIOG797399PX9WwslQNXYZfTByHcQ",
    authDomain: "contactsapp-26475.firebaseapp.com",
    databaseURL: "https://contactsapp-26475.firebaseio.com",
    storageBucket: "contactsapp-26475.appspot.com",
    messagingSenderId: "403779170371",
};

firebase.initializeApp(config);

const App = angular.module('ContactsModule', ['ngRoute', 'firebase', 'mm.foundation'])
.config( ($routeProvider)=>{
  $routeProvider
    .when('/', { templateUrl: 'contacts/partials/_index.html', controller: 'ContactsController', controllerAs: 'ContactsCtrl'} )
    .otherwise( { redirectTo: '/' })
})
