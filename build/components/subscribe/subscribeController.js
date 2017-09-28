angular.module('app.subscribeController',[]).controller('subscribeController', function ($scope,person) {
    $scope.person = person;
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function () {
        if (!$scope.person.firstname  && !$scope.person.secondname) {
            alert('Please, type your First Name and Second Name');
        } else if (!$scope.person.firstname){
            alert('Please, type your First Name');
        } else if (!$scope.person.secondname){
            alert('Please, type your Second Name');
        } else {console.log("Your First name is: " + $scope.person.firstname +
                          "\nYour Second Name is: " + $scope.person.secondname);}

    });
});