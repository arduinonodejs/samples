angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, socket) {

	$scope.relay1 = false;
	$scope.relay2 = false;
	$scope.relay3 = false;
	$scope.relay4 = false;

    socket.on('init', function (data) {
    	$scope.server = data.server;
    });

    
     $scope.doLight = function(state, number) {
    	//console.log(light);
    	state=!state;
	    socket.emit('from_client', { state: state, number: number });
    }

})