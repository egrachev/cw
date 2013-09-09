'use strict';

CopywritersApp.directive('nameUnique', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            function validate(value) {
                var result = _.findWhere(scope.cw_list, {name: value})
                if (result) {
                    ctrl.$setValidity('name_unique', false);
                } else {
                    ctrl.$setValidity('name_unique', true);
                } 
            }

            scope.$watch( function() {
              return ctrl.$viewValue;
            }, validate);
        }
    }
});