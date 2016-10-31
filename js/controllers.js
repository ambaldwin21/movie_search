app.controller('HomeController', function($scope,$http){

$scope.view = {};
$scope.view.message = "This shows all the movies."

$scope.getMovies = function(data){

  var search = data.title;
$http.get(`http://www.omdbapi.com/?t=${search}`).then(function(data){
  console.log("search", search);
  $scope.view.omdb = data;
  console.log('data',data);

});
};

});


app.controller('ShowPageController', function($scope){
  $scope.view = {};
  $scope.view.message = "This shows a single movie"


});
