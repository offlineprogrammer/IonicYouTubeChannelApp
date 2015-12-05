(function() {
    'use strict';

    angular
        .module("myApp")
        .controller('StartupController', StartupController);

    function StartupController($ionicHistory, $scope, $state, $timeout, youTubeService, appConfig,loadingService) {
        function init() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });

            $scope.Channels = [];


            var channel = {
                id: '',
                title: '',
                imageURL: ''
            };


            var forUsernames = appConfig.ChannelUsernames.split(';');

            loadingService.show();



            angular.forEach(forUsernames, function(item) {
                console.log(item);
                var userName = item.split(':')[0];
                var channelTitle = item.split(':')[1];
                youTubeService.getChannelDetails(userName)
                    .then(function(data) {
                        // console.log (data);
                        channel.id = data.items[0].id;
                        channel.title = channelTitle;
                        channel.imageURL = data.items[0].snippet.thumbnails.default.url;

                        $scope.Channels.push(channel);
                        console.log($scope.Channels);
                        channel = {
                            id: '',
                            title: '',
                            imageURL: ''
                        };
                        //return 
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
                    .finally(function() {
                        if ($scope.Channels.length == forUsernames.length) {
                            youTubeService.setChannels($scope.Channels);
                            loadingService.hide();
                            $state.go('home');
                        }

                    });
            });



        }

        $timeout(function() {
            init();

            $scope.$on('$ionicView.beforeEnter', function() {
                init();
            });
        }, 2000);
    }
}());