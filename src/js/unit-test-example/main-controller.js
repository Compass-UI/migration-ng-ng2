var ualCompass = angular.module('ualCompass', []);

angular.module('ualCompass').controller('MainCtrl', ['$scope', function($scope){
    $scope.version = "0.1";
    var bigObject = {name: 'David', company: 'UAL'}
}]).component('sessionDetail', {
    /** IE will throw invalid charater' */
    template: `
    <div>Session Detail</div>
    version: <div>{{$ctrl.version}}
    version: <div>{{this.version}}
    `,
    bindings: {
        version: '@'
    }
    // controller: function(){
    //    var version = "0.1"
    // }
})