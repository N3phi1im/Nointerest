
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

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance, imageURL) {

  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };
  $scope.url = imageURL;

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});