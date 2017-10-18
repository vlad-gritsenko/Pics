var app = angular.module('pics-app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/directory.html',
      controller: 'getPhotos'
    })
    .when('/album/:album_id', {
      templateUrl: 'view/album.html',
      controller: 'getAlbum'
    }).otherwise({
      redirectTo:'/'
    });
}]);


var photosUrl = 'http://jsonplaceholder.typicode.com/photos';
var albumUrl = 'http://jsonplaceholder.typicode.com/albums/:album_id/photos';

app.controller('getPhotos', function ($scope, $http) {

  $scope.limit = 10;

  $http.get(photosUrl).then(function(response) {
    $scope.photos = response.data;
  });

  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $scope.limit += 5;

      $http.get(photosUrl).then(function(response) {
        $scope.photos = response.data;
      });
    }
  };
});

app.controller('getAlbum', ['$scope', '$location', '$interpolate', function ($scope, $location, $interpolate) {
  $scope.test = function() {
    var url = $interpolate('/album/{{album_id}}')
    $location.path(url)
  }
}]);
