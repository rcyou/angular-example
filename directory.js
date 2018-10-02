angular.module('directoryApp',[])
	.controller('directoryController', function($scope) {
		$scope.list = [
			{name:'Ryan', age: 30, town:'Des Moines'},
			{name:'Alyssa', age: 31, town:'Des Moines'},
			{name:'Cali', age: 13, town:'Des Moines'},
			{name:'Aaron', age: 26, town:'West Des Moines'}
		];

		$scope.addPerson = function() {
			$scope.list.push({
				name:$scope.name,
				age:$scope.age,
				town:$scope.town
			});
			$scope.name = "";
			$scope.age = 0;
			$scope.town = "";
		};
	});