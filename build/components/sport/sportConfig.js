angular.module('app.sportConfig', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider.state('sport', {
        abstract: true,
        url: '/sport',
        templateUrl: '../components/sport/sportView.html'
    }).state('sport.basketball', {
        url: '/basketball',
        templateUrl:'../components/sport/basketball/basketballView.html'
    }).state('sport.football', {
        url: '/football',
        templateUrl: '../components/sport/football/footballView.html'
    });
});