app.controller('AllImagesController', function ($scope, $http) {
  var photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  $scope.limit = 10;

  $http.get(photosUrl).then(function(response) {
    $scope.allImages = response.data;
  });

  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $scope.limit += 5;

      $http.get(photosUrl).then(function(response) {
        $scope.allImages = response.data;
      });
    }
  };
});
