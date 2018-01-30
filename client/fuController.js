fuApp.controller('fuController', function($scope, $upload) {
    $scope.upload = function()  {
        var tat = $scope.fily;
        alert('you clicked upload');
    }  
    

    $scope.formObj = {
        name: "Test"
    };
      
      var fileToUpload;
      
      $scope.onFileSelect = function (file) {
       fileToUpload = file[0];
      };
      
      // POSt request to /api/items
      $scope.addItem = function() {
        console.log($scope.formObj);
        $scope.upload = $upload.upload({
         url: '/api/items',
         method: 'POST',
         data: { myObj: $scope.formObj },
         file: fileToUpload
        }).success(function(data, status, headers, config) {
         console.log("success");
        });
      };
});


