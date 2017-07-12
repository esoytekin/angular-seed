'use strict'
angular.module('core.seed-core')
.service('seedCoreService',['$http','$rootScope','Notification',function($http,$rootScope,Notification){
    var self = this;


    self.errorCallback = function(response){
        console.error(response.data);
        Notification.error(response.data);
    }

    self.getServerResponse = function(){
        return $http.get('seedServlet');
    }

    

    

}]);
