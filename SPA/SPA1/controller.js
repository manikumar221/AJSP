/*app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController';
});*/
app.controller("homecontroller",ctrl);
ctrl.$inject=["$scope"];
function ctrl($scope){
    $scope.message = "Hello from HomeController";
}
