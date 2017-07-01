app.controller('studentController',function($scope) {

    $scope.student={

        firstName:"Mani",
        lastname:"Kumar",
        fees:500,
        subjects:[
            {name:'physics',marks:70},
            {name:'chemistry',marks:80},
            {name:'maths',marks:75},
            {name:'english',marks:65},
            {name:'hindi',marks:85}
        ],
        fullName : function() {
            var studentObject;
            studentObject=$scope.student;
            return studentObject.firstname+""+studentObject.lastName;


        }

    };

});