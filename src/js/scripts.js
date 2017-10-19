var app = angular.module('pics-app', ['ngRoute']);

// Routing config
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/directory.html',
      controller: 'AllImagesController'
    })
    .when('/album/:album_id', {
      templateUrl: 'view/album.html',
      controller: 'AlbumImagesController'
    })
    .when('/image/:image_id', {
      templateUrl: 'view/image.html',
      controller: 'SingleImageController'
    }).otherwise({
      redirectTo:'/'
    });
}]);

// Get all photos and display them on the main page
angular.module('pics-app').controller('AllImagesController', function () {});


// Show photos only for associated album
angular.module('pics-app').controller('AlbumImagesController', function () {});


// Show big image 600x600
angular.module('pics-app').controller('SingleImageController', function () {});
