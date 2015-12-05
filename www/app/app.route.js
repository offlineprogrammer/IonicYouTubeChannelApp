(function() {
    'use strict';

    angular.module('myApp')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('startup', {
                    url: '/startup',
                    templateUrl: 'app/startup/startup.html',
                    controller: 'StartupController',
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                })
                .state('videos', {
                    url: '/showVideos/:channelId/:channelTitle',
                    templateUrl: 'app/channel/videos.html',
                    controller: 'VideosController',
                });

            $urlRouterProvider.otherwise('/startup');
        });
}());