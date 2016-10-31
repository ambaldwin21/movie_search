app.controller('HomeController', function($scope,$http){

$scope.view = {};
$scope.view.message = "This shows all the movies."

$http.get('/http://www.omdbapi.com/t=').then(function(data){
  $scope.view.omdb = data.data;
  // $scope.view.results = data.data.results
});

});


app.controller('ShowPageController', function($scope){
  $scope.view = {};
  $scope.view.message = "This shows a single movie"




});
