(function () {
    var app = angular.module("store-directives", []);

    app.directive("productDescription", function () {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });

});