var app = angular.module("movie_search", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/show_page/:id', {
        templateUrl: 'partials/show_page.html',
        controller: 'HomeController'
      })
});
