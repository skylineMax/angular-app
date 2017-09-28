angular.module('app.homeConfig', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            '': {templateUrl: '../components/bodyView.html', controller: 'homeController'},
            'header@home': header,
            'footer@home': footer,
            'news@home': {templateUrl: '../components/news/newsView.html'},
            'sport@home': {templateUrl: '../components/sport/sportView.html'},
            'sport.basketball@home': {templateUrl: '../components/sport/basketball/basketballView.html'},
            'sport.football@home': {templateUrl: '../components/sport/football/footballView.html'}
        }
    });
});