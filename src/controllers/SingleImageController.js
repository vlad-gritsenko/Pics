app.controller('SingleImageController', function ($scope, $http, $routeParams) {

  $scope.imageId = $routeParams.image_id;

  var imageUrl = 'http://jsonplaceholder.typicode.com/photos/'+$scope.imageId+'';

  $http.get(imageUrl).then(function(response) {
    $scope.image = response.data;
  });
});
