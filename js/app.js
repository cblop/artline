'use strict';


// Declare app level module which depends on filters, and services
angular.module('artBrowser', ['artBrowser.filters', 'angularTreeview', 'artBrowser.services', 'artBrowser.directives', 'artBrowser.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/timeline:artist', {templateUrl: 'partials/timeline.html', controller: 'TimelineCtrl'});
    $routeProvider.when('/timeline', {templateUrl: 'partials/timeline.html', controller: 'TimelineCtrl'});
    $routeProvider.when('/catlist', {templateUrl: 'partials/catlist.html', controller: 'CatListCtrl'});
    $routeProvider.otherwise({redirectTo: '/catlist'});
  }]);
