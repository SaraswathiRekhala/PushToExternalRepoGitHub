Application.$controller("Page1PageController", ["$scope", function($scope) {
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


    $scope.UserTable1Beforeformrender = function($event, $isolateScope, $rowData, $operation) {
        debugger;
        if ($rowData.role === 'admin') {
            wmToaster.show('error', 'error', 'Admin row can not be edited');
            return false; //Returning false will stop the editing and form is not rendered 
        }
        //If city is not present in the row being edited, set default city 
        if (!$rowData.password) {
            $rowData.password = $rowData.username + '@';
        }
        //For insert, set default role as 'user' 
        if ($operation === 'new') {
            $rowData.role = 'user';
        }
    };


    $scope.UserTable1_1Beforeformrender = function($event, $isolateScope, $rowData, $operation) {
        debugger;
        if ($rowData.role === 'admin') {
            wmToaster.show('error', 'error', 'Admin row can not be edited');
            return false; //Returning false will stop the editing and form is not rendered 
        }
        //If city is not present in the row being edited, set default city 
        if (!$rowData.password) {
            $rowData.password = $rowData.username + '@';
        }
        //For insert, set default role as 'user' 
        if ($operation === 'new') {
            $rowData.role = 'user';
        }
    };

    $scope.EmployeeTable1Deselect = function($event, $isolateScope, $rowData) {
        debugger
        $scope.Widgets.EmployeeTable1.selecteditem = [1, 2, 4, 5];
    };

}]);

Application.$controller("UserTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.usernameOnClick = function($event, $isolateScope, rowData) {
            debugger
        };

    }
]);



Application.$controller("AllTypesTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    
        $scope.customRowAction = function ($event, $rowData) { 

        };
 
    }
]);

Application.$controller("AllTypesTable1_1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("AllTypesLiveForm1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("UserTable1_1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("AllTypesTable1_2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("EmployeeTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("UserTable1_2Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("UserLiveForm1Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);