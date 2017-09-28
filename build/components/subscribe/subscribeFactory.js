angular.module('app.subscribeFactory', []).factory('subscribeFactory', function () {
    return {
        getPerson: function () {
            return {firstname: '', secondname: ''};
        }
    }
});