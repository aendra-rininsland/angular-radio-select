'use strict';
/**
 * @ngdoc directive
 * @name redboxProfiler.directive:radioSelect
 * @description
 * # radioSelect
 */
angular.module('times.radioSelect')
  .directive('radioSelect', function () {
    return {
      templateUrl: 'components/radio-select/radio-select.html',
      restrict: 'E',
      replace: 'true',
      scope: {
        values: '=',
        breakpoint: '@',
        ngModel: '='
      }
    };
  });
