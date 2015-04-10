var app = angular.module('myapp',[]);

var people=[
   {
	   name: 'Juan',
	   surname: 'Perro',
	   age: 22,
	   specialities: [ 'linux', 'debian' ],
	   paidQuota: true
   },

   {
	   name: 'Eduardo',
	   surname: 'Perez',
	   age: 42,
	   specialities: [ 'linux', 'windows' ],
	   paidQuota: false
   },

];

app.controller('AppCtrl', function() {
   this.number=18;
});
