angular.module("avengerApp").controller("mainCtrl", function($scope, dataService) {

		$scope.avengersArray = dataService.getData();


}); //end of mainCtrl
