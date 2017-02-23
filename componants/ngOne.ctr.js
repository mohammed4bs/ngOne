(function() {
  "use strict";

  angular
      .module("ngOne")
      .controller("oneCtrl", function($scope) { // to enable controller talk to the view we have to inject the $scope in tht anon function
        // the $scope has a property and value
        $scope.name = {
          first: "Mohammed",
          last: "Helmy"
        }
        $scope.messege = "Hello EveryBody";
      });
})();
