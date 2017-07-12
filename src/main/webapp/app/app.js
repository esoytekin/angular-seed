'use strict'

angular.module('my-app',[
    'ngRoute',
    'upper-menu',
    'view1',
    'view2',
    'core',
    'ui-notification'
]).
config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});


}]);
