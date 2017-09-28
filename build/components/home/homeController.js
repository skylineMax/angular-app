angular.module('app.homeController',[]).controller('homeController', function (homeService,$timeout) {
    $timeout(function () {homeService.sayWelcome(
            window.prompt('Type your name:', '')
    )},500);
});