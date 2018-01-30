fuApp.controller('fuController', function($scope, $http) {
    $scope.upload = function()  {
        var tat = $scope.fily;
        alert('you clicked upload');
    }  

    $scope.uploadFile = function(){

        var file = $scope.myFile;
        var uploadUrl = "/multer";
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl,fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
          console.log("success!!");
        })
        .error(function(){
          console.log("error!!");
        });
    };

    $scope.uploadedCourseImage = function(fu) {
        $scope.$apply(function($scope) {
          $scope.myFile = fu.files;    
        });
    }

});


