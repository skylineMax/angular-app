angular.module('app.newsConfig', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider.state('news', {
        url: '/news',
        templateUrl: '../components/news/newsView.html',
        controller: 'newsController'
    });
});