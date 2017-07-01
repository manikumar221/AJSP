var app = angular.module('app',[]);

app.controller('ctrl',ctrl);
ctrl.$inject=['$scope'];
function ctrl($scope){

    var countries=[

        {name:'UK',
         cities:[
             {name:'London'},
             {name:'Manchester'},
             {name:'Bermington'}
               ]
        },
        {name:'USA',
        cities:[
            {name:'NewYork'},
            {name:'NewJersy'},
            {name:'Dallas'}
        ]
        },
        {
            name:'INDIA',
            cities:[
                {name:'hyderabad'},
                {name:'New Delhi'},
                {name:'Chennai'}

            ]
        }

    ];
    $scope.countries= countries;
}