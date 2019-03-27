Application.$controller("DatatablePropsUsingScriptPageController", ["$scope", function($scope) {
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

    $scope.titleTextChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.DepartmentTable1.title = newVal;
    };


    $scope.subHeadingTextareaChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.DepartmentTable1.subheading = newVal;
    };

    $scope.spacingSelectChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.DepartmentTable1.spacing = newVal;
    };


    $scope.loadingIconTextChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.DepartmentTable1.loadingicon = 'wi wi-spinner fa-spin';
        $scope.Widgets.DepartmentTable1.loadingdatamsg = newVal;
    };

    $scope.iconClassTextChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.DepartmentTable1.iconclass = newVal;
    };

    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.HrdbDepartmentData.listRecords();
    };

    $scope.showHeaderToggleChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        if (newVal) {
            $scope.Widgets.DepartmentTable1.showheader = true;
        } else {
            $scope.Widgets.DepartmentTable1.showheader = false;
        }
    };

    $scope.searchSelectChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        if (newVal == 'No Filter') {
            $scope.Widgets.DepartmentTable1.filtermode = newVal;
        } else if (newVal == 'Search') {
            $scope.Widgets.DepartmentTable1.filtermode = 'search';
        } else if (newVal == 'Multi-column') {
            $scope.Widgets.DepartmentTable1.filtermode = 'multicolumn';
        }
    };

    $scope.widthTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.width = newVal;
    };

    $scope.radioColToggleChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        if (newVal) {
            $scope.Widgets.DepartmentTable1.radioselect = true;
        } else {
            $scope.Widgets.DepartmentTable1.radioselect = false;
        }
    };

    $scope.enableSortToggleChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        if (newVal) {
            $scope.Widgets.DepartmentTable1.enablesort = true;
        } else {
            $scope.Widgets.DepartmentTable1.enablesort = false;
        }
    };

    $scope.colSelectionToggleChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        if (newVal) {
            $scope.Widgets.DepartmentTable1.enablecolumnselection = true;
        } else {
            $scope.Widgets.DepartmentTable1.enablecolumnselection = false;
        }
    };


    $scope.deleteMsgTextareaChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.confirmdelete = newVal;
    };


    $scope.msgOnDeleteTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.deletemessage = newVal;
    };


    $scope.noDataMsgTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.nodatamessage = newVal;
    };


    $scope.dataLoadingMsgTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.loadingdatamsg = newVal;
    };


    $scope.confirmTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.deleteoktext = newVal;
    };


    $scope.cancelTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.deletecanceltext = newVal;
    };


    $scope.rowClassTextChange = function($event, $isolateScope, newVal, oldVal) {
        debugger
        $scope.Widgets.DepartmentTable1.rowclass = newVal;
    };

}]);


Application.$controller("DepartmentTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customRowAction = function($event, $rowData) {
            debugger
            alert("Welcome to: " + $rowData.name);
        };
    }
]);

Application.$controller("DepartmentLiveForm1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);