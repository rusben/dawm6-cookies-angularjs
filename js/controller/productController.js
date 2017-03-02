//JQuery code



//Angular code
(function () {

	angular.module("cookiesApp").controller("productController", ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
		$scope.product = new productObj();
		$scope.product.setSelectForm("option1");
		$scope.product.setRadioType("Option 1");

		//Scope varibles for cookies management
		$scope.generalName = "consum";
		$scope.path = "/";
		$scope.domain;
		$scope.expires;
		$scope.secure;

		//date picker variables
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];

		$scope.dateOptions = {
			dateDisabled: "",
			formatYear: 'yyyy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		$scope.dateToValidate = {
			opened: false
		};

		$scope.openDateToValidate = function() {
			$scope.dateToValidate.opened = true;
		};

    this.createCookie = function() {

      // Get the number of cookies untill now
      var nCookies = $cookies.get($scope.generalName, { path : $scope.path });

      // If this is the first cookie just initialize to 0
      if (isNaN(nCookies)) nCookies = 0;

      // We save the object with the generalName plus the number of cookies until now
      $cookies.putObject( $scope.generalName + nCookies, $scope.product, { path : $scope.path });

      // We save each product
      $cookies.put($scope.generalName, parseInt(nCookies) + 1, { path : $scope.path });

    };

	}]);
})();
