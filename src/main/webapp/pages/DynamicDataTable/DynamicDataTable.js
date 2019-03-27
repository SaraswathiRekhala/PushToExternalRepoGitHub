Application.$controller("DynamicDataTablePageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Widgets.DynamicGridData.dataset = $scope.Variables.SVDeptData.dataSet;
    };


    $scope.button2Click = function($event, $isolateScope) {
        $scope.Widgets.DynamicGridData.dataset = $scope.Variables.HQL_CustomVacationData.dataSet;
    };

}]);


Application.$controller("DynamicGridDataController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DynamicGridDataController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);