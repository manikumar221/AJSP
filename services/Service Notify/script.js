(function(angular) {
    'use strict';
    angular.module('myServiceModule', [])
        .controller('MyController', ['$scope', 'notify', function($scope, notify) {
        $scope.callNotify = function(msg) {
            notify(msg);
        };
    }]).
    factory('notify', ['$window', function(win) {
        var msgs = [];
        return function(msg) {
            msgs.push(msg);
            if (msgs.length === 3) {
                win.alert(msgs.join('\n'));
                msgs = [];
            }
        };
    }]);
})(window.angular);
/*
$window:
A reference to the browser's window object. While window is globally available in JavaScript,
it causes testability problems, because it is a global variable.'
' In AngularJS we always refer to it through the $window service,
so it may be overridden, removed or mocked for testing.*/
/*
(window.angular):


*/
