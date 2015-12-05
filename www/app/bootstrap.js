(function () {
    window.ionic.Platform.ready(function () {
        angular.bootstrap(document, ['myApp'], {
            strictDi: false
        });
    });
}());
