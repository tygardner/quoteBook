var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, mainService){


	$scope.getData = function() {
		$scope.data = mainService.getData();
	};

	$scope.getData();


	$scope.addData = function(text, author){
		mainService.addData(text, author);
	};

	$scope.removeData = function(){
		mainService.removeData($scope.removeItem);
		
	};


});