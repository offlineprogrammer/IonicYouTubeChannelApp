(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('dataService', dataService);

    function dataService($http, $q, appConfig) {
     
        
        init();

        var service = {};

        service.youtube = {
            getVideos: function(channelId,nextPageToken) {

                var youtubeParams = {
                    key: appConfig.YouTubeAPIKey,
                    type: 'video',
                    maxResults: '10',
                    part: 'id,snippet',
                    q: '',
                    order: 'viewCount',
                    channelId: channelId,
                    pageToken:nextPageToken

                };

                return get('search?', youtubeParams);

            },

            getChannelDetails: function(forUsername) {

                var youtubeParams = {
                    key: appConfig.YouTubeAPIKey,
                    forUsername: forUsername,
                    part: 'id,snippet'
                };

                return get('channels?', youtubeParams);

            }
        };



        return service;


        function get(uriSuffix, params) {
            var deferred = $q.defer();

            $http.get(appConfig.webApiRoot + uriSuffix, {
                    params: params
                })
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }


 


        
        function init() {

        }
    }
}());