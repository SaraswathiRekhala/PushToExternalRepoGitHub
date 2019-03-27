Application.$controller("NormalTableActionEventsPageController", ["$scope", function($scope) {
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

}]);


Application.$controller("DepartmentTable1Controller", ["$scope", "wmToaster",
    function($scope, wmToaster) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customButtonAction = function($event) {
            debugger
            var selectedField = $scope.Variables.staticVarSelectColumns.dataSet;
            var fieldJson = {};

            _.forEach($scope.selectedColumns, function(value, key) {
                if (fieldJson.hiddenColumns && fieldJson.hiddenColumns[0]) {
                    if (fieldJson.hiddenColumns.indexOf(key) == -1) {
                        fieldJson.hiddenColumns.push(key);
                        value.colDef.show = false;
                    }
                } else {
                    fieldJson.hiddenColumns = [key];
                    value.colDef.show = false;
                }
            });
            if (fieldJson.hiddenColumns.length > 0) {
                $scope.Variables.staticVarShowAllFieldsButton.setValue("dataValue", true);
            }
            $scope.redraw();
            $scope.Variables.staticVarSelectColumns.setValue("fieldName", JSON.stringify(fieldJson));
            console.log($scope.Variables.staticVarSelectColumns.getData());
        };


        $scope.customButton1Action = function($event) {
            debugger
            var selectedField = $scope.Variables.staticVarSelectColumns.dataSet;
            var fieldJson = {};

            //Update hiddenColumns array AND hide columns
            fieldJson.hiddenColumns = [];
            _.forEach($scope.columns, function(value) { //Show all in data grid
                value.show = true;
            });
            $scope.redraw();

            //Update local static Settings Variable
            $scope.Variables.staticVarSelectColumns.setValue("fieldName", JSON.stringify(fieldJson));
        };


        $scope.customRow2Action = function($event, $rowData) {
            debugger
            wmToaster.show('success', 'SUCCESS', "The RowData is: " + $rowData.name, 8000);
        };

    }
]);

Application.$controller("DepartmentLiveForm1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentTable2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentTable3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentTable4Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentTable5Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentTable6Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentLiveForm2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("DepartmentLiveForm1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);