/**
 * Created by Alex on 7/14/2014.
 */

var resumeApp ={
    $ng : angular.module('resumeApp', [
        'ngAnimate'
    ])
};

resumeApp.testDirective = function(){
    return {
        restrict : 'E',
        transclude : true,
        template : "<div ng-transclude></div>"
    }
};

resumeApp.$ng.directive('test', [resumeApp.testDirective]);

resumeApp.primaryCollapsiblePanel = function(){
    return {
        restrict: 'E',
        transclude : true,
        templateUrl: 'partials/primary-collapsible.html',
        scope : {
            'title' : '@',
            'containerId' : '@'
        }
    };
};

resumeApp.$ng.directive('primaryCollapsiblePanel', [resumeApp.primaryCollapsiblePanel]);

resumeApp.defaultCollapsiblePanel = function(){
    return {
        restrict: 'E',
        transclude : true,
        templateUrl: 'partials/default-collapsible.html',
        scope : {
            'title' : '@',
            'containerId' : '@'
        }
    };
};

resumeApp.$ng.directive('defaultCollapsiblePanel', [resumeApp.defaultCollapsiblePanel]);

resumeApp.projectPanel = function(){
    return {
        restrict: 'E',
        transclude : true,
        templateUrl: 'partials/project.html',
        scope : {
            'title' : '@',
            'containerId' : '@',
            'city' : '@',
            'date' : '@'
        }
    };
};
resumeApp.$ng.directive('projectPanel', [resumeApp.projectPanel]);
