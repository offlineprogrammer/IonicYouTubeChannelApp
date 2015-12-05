(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('loadingService', loadingService);

    function loadingService($ionicLoading) {
        var service = {
            show: show,
            hide: hide
        };

        function show() {
            $ionicLoading.show({
                template: '<ion-spinner class="spinner-positive" icon="bubbles"></ion-spinner>',
                delay: 100
            });
        }

        function hide() {
            $ionicLoading.hide();
        }

        return service;
    }
}());
