var app = angular.module('pics-app', []);

app.controller('getData', function ($scope, $http) {
  var url = 'http://jsonplaceholder.typicode.com/photos';


  $scope.limit = 10;

  $http.get(url).then(function(response) {
    $scope.photos = response.data;
    console.log(response.data);
  });


  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $scope.limit += 5;

      $http.get(url).then(function(response) {
        $scope.photos = response.data;

      });
    }
  };


});
