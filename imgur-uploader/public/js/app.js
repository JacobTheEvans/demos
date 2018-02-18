var app = angular.module("app", ["ngFileUpload"]);

app.controller("ctrl", function($scope, Upload, $timeout) {
  $scope.uploadFiles = function(file, errFiles) {
    console.log("Called");
    $scope.f = file;
    $scope.errFile = errFiles && errFiles[0];
    if (file) {
      file.upload = Upload.upload({
        url: "http://localhost:8080/image",
        data: {file: file}
      });
      file.upload.then(function (response) {
        $timeout(function () {
          console.log(response.data);
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0) {
          $scope.errorMsg = response.status + ": " + response.data;
        }
      }, function (evt) {
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }
  }
});
