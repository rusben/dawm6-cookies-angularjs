//Angular code
(function (){
	angular.module("cookiesApp").controller("showProductsController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {
		$scope.productsArray = [];
		$scope.productsArrayAux = [];

		$scope.cookie = new productObj();
		$scope.totalPrice = 0;
		$scope.editInput=[];

		//Pagination variables
		$scope.pageSize = 5;
		$scope.currentPage = 1;
		$scope.filteredData;

		//Scope varibles for cookies management
		$scope.generalName = "consum";
		$scope.path = "/";
		$scope.domain;
		$scope.expires;
		$scope.secure;
	}]);

	angular.module("cookiesApp").directive("cookieInformation", function (){
		return {
		  restrict: 'E',
		  templateUrl:"../templates/cookie-information.html",
		  controller:function(){

		  },
		  controllerAs: 'cookieInformation'
		};
	});
})();
