'use strict';

var rentControllers = angular.module('rentControllers', []);

rentControllers.controller("creerCarController", function($scope,$http,$routeParams) {

	$scope.createCar = function() {
		$http.post('http://localhost:8080/RestWebService/car/AZE', 'AAA').
		  success(function(data, status, headers, config) {
		  }).
		  error(function(data, status, headers, config) {
			  alert("Error: " + status + " while accessing $http.post('http://localhost:8080/RestWebService/car/')");
		  });
	};
	        
});

rentControllers.controller("supprimerCarController", function($scope,$http,$routeParams) {

	$scope.plateNumber = "";
	
	$scope.supprimerCar = function(plateNumber) {
		$http.delete('http://localhost:8080/RestWebService/car/'+plateNumber).
		  success(function(data, status, headers, config) {
		  }).
		  error(function(data, status, headers, config) {
			  alert("Error: " + status + " while accessing $http.delete('http://localhost:8080/RestWebService/car/'+plateNumber)");
		  });
	};
	        
});
		
		
rentControllers.controller("louerController", function($scope,$http,$routeParams) {

$http.get('http://localhost:8080/RestWebService/car').
  success(function(data, status, headers, config) {
  $scope.carsList = data;
  $scope.selected = data[0].plateNumber;
  }).
  error(function(data, status, headers, config) {
	  alert("Error: " + status + " while accessing $http.get('http://localhost:8080/RestWebService/car')");
  });

$scope.rent = function(car) {
	$http.put('http://localhost:8080/RestWebService/car/'+car.plateNumber+'?rent=true').
	  success(function(data, status, headers, config) {
	  }).
	  error(function(data, status, headers, config) {
		  alert("Error: " + status + " while accessing $http.put('http://localhost:8080/RestWebService/car/'+car.plateNumber)");
	  });
};
        
});

rentControllers.controller("ramenerController", function($scope,$http,$routeParams) {

	$scope.plateNumber = "";
	
	$scope.getBack = function(plateNumber) {
		$http.put('http://localhost:8080/RestWebService/car/'+plateNumber+'?rent=false').
		  success(function(data, status, headers, config) {
		  }).
		  error(function(data, status, headers, config) {
			  alert("Error: " + status + " while accessing $http.put('http://localhost:8080/RestWebService/car/'+plateNumber)");
		  });
	};
	        
});