'use strict'

angular.module('upper-menu')

.component("upperMenu", {
    templateUrl : 'app/upper-menu/upper-menu.template.html',
    controller : 'upperMenuController'
})

.controller('upperMenuController', ['$http','$rootScope',function upperMenuController($http,$rootScope){
    var self = this;

    $rootScope.$watch('currentPage', function(newPage, oldPage){
        self.currentPage = newPage;
    });


}]);
