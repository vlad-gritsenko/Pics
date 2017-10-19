app.controller('AlbumImagesController', function ($scope, $http, $routeParams) {

  var albumUrl = 'https://jsonplaceholder.typicode.com/albums/'+$scope.albumId+'/photos';

  $scope.albumId = $routeParams.album_id;

  $http.get(albumUrl).then(function(response) {
    $scope.albumImages = response.data;
  });
});
