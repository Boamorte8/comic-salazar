'use strict';

angular.module('comicsApp')
  .directive('footer', function() {
    return {
      templateUrl: 'app/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
