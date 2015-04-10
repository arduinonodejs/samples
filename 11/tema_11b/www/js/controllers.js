angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, socket) {

    socket.on('init', function (data) {
    	$scope.settingsList = data;
    	//console.log(data);
    });
    
    socket.on('from_server', function (data) {
    	//console.log(data)
    	 $scope.settingsList[data.number].checked=data.state;
    });


     $scope.doLight = function(state, number) {
    	//console.log(state+" "+number);
	    socket.emit('from_client', { state: state, number: number });
    }

})