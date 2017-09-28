angular.module('app.subscribeConfig', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider.state('subscribe', {
        url: '/subscribe',
        templateUrl: '../components/subscribe/subscribeView.html',
        controller: 'subscribeController',
        resolve: {
            person: function (subscribeFactory) {
                return subscribeFactory.getPerson();
            }
        }
    });
});