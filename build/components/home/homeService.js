angular.module('app.homeService',[]).service('homeService', function ($timeout) {
    this.sayWelcome = function (name) {
        $timeout(function () {
            if(name === null) {
                alert('Anyway, welcome to news portal whoever you are!');
            } else {
                alert('Welcome to news portal ' + '>>>' + name.toUpperCase()+ '<<<!');
            }
        },1000);
    };
});