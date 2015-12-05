(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('VideosController', VideosController);

    function VideosController($scope, $state, youTubeService, $stateParams,loadingService) {
        function init() {

            var channelId = $stateParams.channelId;
            $scope.channelTitle = $stateParams.channelTitle;

             $scope.videos = [];

           

            $scope.playerVars = {
                rel: 0,
                showinfo: 0,
                modestbranding: 0,
            };

            getVideos(channelId);


        }

        function getVideos(channelId, nextPageToken) {

            
            loadingService.show();
            youTubeService.getVideos(channelId,nextPageToken)
                .then(function(data) {
                    // console.log (data);
                    $scope.videos = $scope.videos.concat(data.items);
                  
                    $scope.nextPageToken = data.nextPageToken;

                    //return 
                })
                .catch(function(error) {
                    console.log(error);
                })
                .finally(function() {

                    loadingService.hide();


                });


        }


         init();


          $scope.loadMore =   function () {

            var nextPageToken = $scope.nextPageToken;
             var channelId = $stateParams.channelId;

             getVideos(channelId,nextPageToken);
             $scope.$broadcast('scroll.infiniteScrollComplete');

        };
    }
}());