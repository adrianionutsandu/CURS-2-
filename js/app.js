var app = angular.module("myApp",[]);
app.controller("TestCtrl",['$scope' , function ($scope) {
	$scope.names = [
		'Andi' , 'Ciprian' , 'Alexandra' , 'Oana'
	];

	$scope.name= "Adrian";

	$scope.clickBtn = function(){
		console.log("Button clicked");
		console.log($scope.firstname);

		$scope.names.push ($scope.firstname);
		$scope.firstname = "";
	}
	$scope.delete = function (index){
		console.log(index);
		$scope.names.splice(index,1);
	}
}]);