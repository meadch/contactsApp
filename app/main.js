'use strict';

var config = {
    apiKey: "AIzaSyD4z1PIOG797399PX9WwslQNXYZfTByHcQ",
    authDomain: "contactsapp-26475.firebaseapp.com",
    databaseURL: "https://contactsapp-26475.firebaseio.com",
    storageBucket: "contactsapp-26475.appspot.com",
    messagingSenderId: "403779170371"
};

firebase.initializeApp(config);

angular.module('ContactsModule', ['ngRoute'])
.config( ($routeProvider)=>{
  $routeProvider
    .when('/', { templateUrl: 'partials/_index.html'} )
    .otherwise( { redirectTo: '/' })
})
