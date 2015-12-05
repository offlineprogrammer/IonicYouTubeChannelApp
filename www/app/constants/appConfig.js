(function () {
    'use strict';

    angular
        .module("myApp")
        .constant('appConfig', {
            appId: 'eacd574a',
            YouTubeAPIKey: '<YourAPIKey>',
            appName: 'Barney YouTube App',
            appVersion: 'X.X',
            ChannelUsernames:'VideoStationBRNY:Barney',
            webApiRoot: 'https://www.googleapis.com/youtube/v3/'

        });
}());