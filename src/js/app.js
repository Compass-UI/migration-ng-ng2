var ualCompass = angular.module('ualCompass', []);

angular.module('ualCompass').controller('MaintCtrl', ['$scope', function($scope){
    $scope.version = "0.1"
}]).component('sessionDetail', {
    template: `
    <div>Session Detail</div>
    <div>{{$ctrl.version}}</div>
    `
})

angular.element(document).ready(function(){
  angular.bootstrap(document.body, ['ualCompass'])  
})