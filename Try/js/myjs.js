
var app = angular.module("myToDoList", []);

//definition of a controller for the Angular JS module
app.controller("myCtrl", function($scope) {
    
	//the tasks array holds the tasks in the to do list, here with one element initialised
    $scope.tasks = ["an example task"];
    // the function adds items from the array 'tasks'
    $scope.addItem = function () {
    	// the addTask is the item in the input field that will be pushed in the 'tasks' array
        $scope.tasks.push($scope.addTask);
    }
    // the function removes items from the array 'tasks' using the splice method
    $scope.removeItem = function (y) {
        $scope.tasks.splice(y, 1);
    }
});