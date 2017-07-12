'use strict'

angular.module('view2')

.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/view2',{
        template: '<view2></view2>'
    })
}])

.component("view2", {
    templateUrl : 'app/view2/view2.template.html',
    controller : 'view2Controller'
})

.controller('view2Controller', ['$http','$rootScope',function view2Controller($http,$rootScope){
    var self = this;

    //set currentPage
    $rootScope.currentPage = 'view2';

    self.message = "this is view2";


}]);
