angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('MainCtrl', function($scope, $stateParams, $timeout, $window, socket) {

	
	$scope.servo=0;
	
	$scope.potentiometer=0;

	socket.on('init', function (data) {
    	$scope.servo = data.value;
    	//console.log(data);
    });
    
     socket.on('from_server', function (data) {
    	console.log("recieve: "+data.value);
	    
    	$scope.servo = data.value;

    	$window.location.reload();

     });
     
     socket.on('value', function (data) {
    	console.log("potentiometer: "+data.val);
	    
    	$scope.potentiometer = data.val;


     });
     
    
	
	 /*

	 $scope.$watch('servo', function() {
		 console.log($scope.servo);
		 //socket.emit('from_client', { value: $scope.servo });
      });
	 */
    
    $scope.changeRange = function(servo_pass) {
         console.log("send: "+servo_pass);
         $scope.servo = servo_pass;
		 socket.emit('from_client', { value: servo_pass });   
    }
    
    
    
    
    $scope.test = function(data) {
    	console.log("nada");
		 $scope.servo = data;
     };


})



