(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('youTubeService', youTubeService);

    function youTubeService($ionicHistory, $rootScope, dataService, CacheFactory) {
        var CACHE_NAME = 'youTubeCache';
        var CHANNELS_CACHE_KEY = 'Channels';


        var cache;
        var cachedchannels;


        init();

        var service = {};

        service.getChannelDetails = function(forUsername) {

            return dataService.youtube.getChannelDetails(forUsername)
                .then(function(data) {
                    console.log('found');
                    return data;
                });
        };


        service.getVideos = function(channelId,nextPageToken) {

            return dataService.youtube.getVideos(channelId,nextPageToken)
                .then(function(data) {
                    console.log('found');
                    console.log(data);
                    return data;
                });
        };

        service.setChannels = function(channels) {
             if(cachedchannels && cachedchannels.length === 0)
            setCachedChannels(channels);
        };

        service.getChannels = function() {
            cachedchannels = angular.fromJson(cache.get(CHANNELS_CACHE_KEY)) || [];

            return cachedchannels;
        };



        return service;

        function init() {

            cache = new CacheFactory(CACHE_NAME, {
                storageMode: 'localStorage'
            });

            cachedchannels = angular.fromJson(cache.get(CHANNELS_CACHE_KEY)) || [];



        }

        function setCachedChannels(channels) {
            cache.put(CHANNELS_CACHE_KEY, channels);
        }


    }
}());