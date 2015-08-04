angular.module('app').controller('TestCtrl', function ($scope, $modal, $log) {

  $scope.open = function (url) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        imageURL: function () {
          return url;
        }
      }
    });
  };
});

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance, imageURL) {
  $scope.url = imageURL;

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});