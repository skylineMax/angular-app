angular.module('app.smediaComponent',[]).component('smediaComponent', {
    controller: function () {
      var  toTop = document.getElementById('to-top');
      toTop.addEventListener('click', function () {
          window.scrollTo(0,0);
      });
    },
    template: '<span id="to-top">GO TO TOP</span>'
});