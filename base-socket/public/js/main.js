var app = angular.module("app", []);

app.service("io", [function() {

}]);

app.controller("mainController", ["$scope", "io", function($scope, io) {
  $scope.scrollDown = function() {
    var objDiv = document.getElementById("chat-box");
    objDiv.scrollTop = objDiv.scrollHeight;
  };
}]);
