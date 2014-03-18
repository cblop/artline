'use strict';

/* Controllers */

angular.module('artBrowser.controllers', []).
	controller('CatListCtrl', ['$scope', '$http', function($scope, $http) {
		$http.get('cats/cats.json').success(function(data) {
			$scope.cats = data;
			$scope.level1 = data['children'];
		});
		$http.get('cats/lodaclinks.json').success(function(data) {
			$scope.artists = data;
		});
		/*
		$http.get('artists/744040-timeline.json').success(function(data) {
			console.log($scope.events);
		});
		*/
		$scope.changeEvents = function(events){
			$scope.events = events;
		};	
		$scope.events = 'artists/744040-timeline.json';

}])
.controller('TimelineCtrl', ['$scope', '$http', function($scope, $http) {
		//$scope.artname = routeParams.artist;
		$http.get('artists/timeline.json').success(function(data) {
	    $scope.events = data;
  });
}]);

