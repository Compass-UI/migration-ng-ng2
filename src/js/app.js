var ccCompass = angular.module('ualCompass', []);

angular.module('ccCompass').directive('MaintCtrl', ['$scope', function($scope){
    $scope.version = "0.1"
}])

angular.element(document).ready(function(){
  angular.bootstrap(html, ['ccCompass'])  
})