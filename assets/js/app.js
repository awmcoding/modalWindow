var app = angular.module('myApp', ['ngTouch','ngAnimate','ui.bootstrap']);
app.controller("MainController",['$scope','$uibModal',function($scope,$uibModal){

    $scope.openModal = function(){
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'modalWindow.html',
            controller :'ModelHandlerController',
            controllerAs: '$ctrl',
        });

    }

}]);
app.controller("ModelHandlerController",function($scope,$uibModalInstance){

    $scope.cancelModal = function(){
        console.log("cancelmodal");
        $uibModalInstance.dismiss('close');
    }
    $scope.ok = function(){
        $uibModalInstance.close('save');
        console.log($scope.reviewText);

    }
    $scope.disableButton = false;
    $scope.rated = false;
    $scope.show_texarea = false;
    $scope.rateNow = function($rate){
        $scope.disableButton = true;
        $scope.rated = $rate;
        $scope.show_texarea = true;
        console.log($rate);
    }

});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);