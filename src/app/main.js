import angular from 'angular';

angular.element(document).ready(function() {
    angular.module('starter-app-bootstrap', []).run(() => {
        console.log(`Running the 'starter-app-bootstrap' module for ES6 Material-Start Tutorial`);
    });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap(body, ['starter-app-bootstrap']);
});