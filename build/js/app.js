var header = {
    templateUrl: '../components/headerView.html'
};
var footer = {
    templateUrl: '../components/footerView.html'
};
angular.module('app',[
        'ui.router',
        'app.homeModule',
        'app.newsModule',
        'app.sportModule',
        'app.subscribeModule',
        'app.smediaComponent'
]).config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});