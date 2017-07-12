'use strict'

angular.module('view1')

.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/view1',{
        template: '<view1></view1>'
    })
}])

.component("view1", {
    templateUrl : 'app/view1/view1.template.html',
    controller : 'view1Controller'
})

.controller('view1Controller', ['$http','$rootScope','seedCoreService',function view1Controller($http,$rootScope,seedCoreService){
    var self = this;

    //set currentPage
    $rootScope.currentPage = 'view1';

    self.message = "this is view1";
    
    self.serverResponse = "getting server message...";
    
    seedCoreService.getServerResponse().then(
        function success(response){
            var serverResponse = response.data;
            if (serverResponse && serverResponse !== "null") {
                self.serverResponse = serverResponse;
            }
    
        }, seedCoreService.errorCallback);



}]);
