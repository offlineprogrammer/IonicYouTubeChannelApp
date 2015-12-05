(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    function HomeController($scope, $state, youTubeService) {
        function init() {

            $scope.items = youTubeService.getChannels();
                   
           
        }


        init();
    }
}());
