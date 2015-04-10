angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, socket) {

    socket.on('init', function (data) {
    	$scope.server = data.server;
    });

       socket.on('from_server', function (message) {
    	$scope.messages.push(message);
    });

    //some vars
    $scope.glued = true;
    $scope.messages = [];
    $scope.error="";
    $scope.your_name="";
    $scope.message="";

    $scope.sendMessage = function() {

      if ($scope.your_name=='') {
	    	$scope.error="Please choose a name";
    	} else {
	    	$scope.error="";
    	}

     	    if ($scope.message!='' && $scope.your_name!='') {

		    socket.emit('from_client', { your_name: $scope.your_name, message: $scope.message });
		    
		    $scope.messages.push({
		    	your_name: $scope.your_name,
			    message: $scope.message
			});
		    
		    $scope.message = '';
		    
	   }

   }

})
