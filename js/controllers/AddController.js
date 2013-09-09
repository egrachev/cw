'use strict';

CopywritersApp.controller('AddController', 
    function AddController($scope) {
        $scope.cw_list = [
            {name: 'cw1', type: 'white'},
            {name: 'cw2', type: 'white'},
            {name: 'cw3', type: 'white'},
            {name: 'cw4', type: 'black'},
            {name: 'cw5', type: 'black'}
        ];

        $scope.get_white_list = function (cw_list) {
            return _.where(cw_list, {type: "white"});
        };

        $scope.get_black_list = function (cw_list) {
            return _.where(cw_list, {type: "black"});
        };

        $scope.add_cw = function (cw) {
            if (cw.$valid) {
                var new_cw = angular.copy(cw);
                $scope.cw_list.push(new_cw);
                $scope.new_cw.name = "";
                $scope.new_cw.type = "white"
            }
        };

        $scope.remove_cw = function (cw) {
            $scope.cw_list = _.filter($scope.cw_list, function(el) { 
                return el.name != cw.name;
            });
        };

        $scope.change_type = function (cw) {
            if (cw.type == 'white') {
                cw.type = 'black';
            } else if (cw.type == 'black') {
                cw.type = 'white';
            }
        };
    }
);