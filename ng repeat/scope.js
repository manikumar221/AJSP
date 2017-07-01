var app = angular.module('app',[]);

app.controller('ctrl',ctrl);
ctrl.$inject=['$scope'];
function ctrl($scope){

var employees=[

{firstName: 'Mani',lastName :'Kumar',age:26,gender:'male',salary:50000},
{firstName: 'Srikanth',lastName :'CH',age:26,gender:'male',salary:60000},
{firstName: 'Sravan',lastName :'Kumar',age:27,gender:'male',salary:80000},
{firstName: 'Hari',lastName :'Krishna',age:28,gender:'male',salary:90000},
{firstName: 'Vinod',lastName :'Kumar',age:26,gender:'male',salary:50000}

]
$scope.employees=employees;
}