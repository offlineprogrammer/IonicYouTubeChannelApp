(function () {
    'use strict';

    angular.module('myApp', [
        'ionic',
        'ngCordova',
        'angular-cache',
        'youtube-embed'
    ])
        .run(function ( $window, appConfig) {
            ionic.Platform.ready(function () {
                if ($window.StatusBar) {
                    $window.StatusBar.styleDefault();
                }

                 if ($window.cordova) {
                        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                        // for form inputs)
                        if ($window.cordova.plugins.Keyboard) {
                            $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        }

                        if ($window.cordova.logger) {
                            $window.cordova.logger.__onDeviceReady();
                        }

                        
                    }
            });
        })
     
}());