Application.$controller("InlineEditRowEventsPageController", ["$scope", "wmToaster", function($scope, wmToaster) {
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

    var sortCol = "";
    $scope.AllTypesTable1Beforerowinsert = function($event, $isolateScope, $rowData) {
        debugger
        $rowData.textCol = $rowData.textCol + ' Script';
        //Set the input as $rowData for variable
        $scope.Variables.LV_InsertData.setInput($rowData);
        //Insert the data by invoking the variable
        $scope.Variables.LV_InsertData.createRecord({}, function() {
            //On success, call the refreshData on method to get the refreshed data
            $isolateScope.refreshData();
        });

        // if ($rowData.stringCol.length < 6) {
        //     wmToaster.show('error', 'ERROR', 'StringCol length too small');
        //     return false;
        // }
    };


    $scope.AllTypesTable1Select = function($event, $isolateScope, $rowData) {
        debugger
        console.log("The row data is: ", $rowData);
        $scope.Widgets.AllTypesTable1.filtermode = 'multicolumn';
        wmToaster.show('success', 'SUCCESS', "Triggered onSelect() event", 9000);
    };


    // $scope.AllTypesTable1Deselect = function($event, $isolateScope, $rowData) {
    //     debugger
    //     console.log("The row data which deleselected is: ", $rowData);
    //     //Deleselect All Items
    //     $scope.Widgets.AllTypesTable1.selecteditem = [];
    //     //Set Sorting property of PKID to false
    //     $scope.Widgets.AllTypesTable1.columns.pkId.setProperty('sortable', false);
    //     wmToaster.show('success', 'SUCCESS', "Triggered onDeselect() event", 9000);
    // };


    $scope.AllTypesTable1Sort = function($event, $data) {
        debugger
        console.log("The sort column data: ", $data);
        wmToaster.show('success', 'SUCCESS', "Sorting applied: " + sortCol, 9000);
    };


    $scope.AllTypesTable1Headerclick = function($event, $data) {
        debugger
        console.log("The column data with column field:", $data.field, $data);
        sortCol = $data.field;
        wmToaster.show('success', 'SUCCESS', "Triggered onHeaderClick() event", 9000);
    };


    $scope.AllTypesTable1Rowclick = function($event, $isolateScope, $rowData) {
        debugger
        console.log("The clicked row data is: ", $rowData);
        wmToaster.show('success', 'SUCCESS', "Triggered onRowClick() event", 9000);
    };


    $scope.AllTypesTable1Rowdblclick = function($event, $isolateScope, $rowData) {
        debugger
        console.log("The clicked row data is:", $rowData);
    };


    $scope.AllTypesTable1Columnselect = function($event, $data) {
        debugger
        console.log("The column data with column field:", $data.colDef.field, $data.data);
        wmToaster.show('success', 'SUCCESS', "Triggered onColumnSelect() event", 9000);
    };


    $scope.AllTypesTable1Columndeselect = function($event, $data) {
        debugger
        console.log("The column data with column field:", $data.colDef.field, $data.data);
    };


    // $scope.AllTypesTable1Beforeformrender = function($event, $isolateScope, $rowData, $operation) {
    //     debugger
    // };


    // $scope.AllTypesTable1Formrender = function($event, $isolateScope, formWidgets, $operation) {
    //     debugger
    // };


    $scope.AllTypesTable1Rowdelete = function($event, $isolateScope, $rowData) {
        debugger
        onsole.log("The deleted row data:", $rowData);
    };


    $scope.AllTypesTable1Rowinsert = function($event, $isolateScope, $rowData) {
        debugger
        console.log("The inserted row data:", rowData);
    };


    $scope.AllTypesTable1Beforerowupdate = function($event, $isolateScope, $rowData) {
        debugger
        if ($data.stringCol.length < 4) {
            wmToaster.show('error', 'ERROR', 'StringCol length too small');
            return false;
        }

        //On before update row, modify the data 
        $data.dateCol = Date.now();
    };

    $scope.AllTypesTable1Rowupdate = function($event, $isolateScope, $rowData) {
        debugger
        console.log("The deleted row data:", $rowData);
    };


    $scope.AllTypesTable1Beforedatarender = function($isolateScope, $data, $columns) {
        debugger
        $data.forEach(function(obj) {
            if (obj.booleanCol == true) {
                obj.booleanCol = 'Success';
            } else if (obj.booleanCol == false) {
                obj.booleanCol = 'Failure';
            }
        });
        $data.forEach(function(obj) {
            if (obj.byteCol <= 20) {
                obj.byteCol = 'Younger';
            } else if (obj.byteCol > 20 && obj.byteCol <= 50) {
                obj.byteCol = 'Young';
            } else if (obj.byteCol > 50) {
                obj.byteCol = 'Older';
            }
        });
    };


    $scope.AllTypesTable1Datarender = function($isolateScope, $data) {
        debugger
        $isolateScope.datagridElement.find('tr.app-datagrid-row').each(function(index) {
            //Loop through the rows. Add class for users having booleanCol as Success
            if ($data[index].booleanCol === 'Failure') {
                $(this).addClass('trueClass');
            }
        });
    };


    $scope.AllTypesTable1Setrecord = function($event, $data) {
        debugger
    };


    $scope.AllTypesTable1Error = function($event, $isolateScope, $data, $operation) {
        debugger
        if ($operation == 'insert') {
            $data.stringCol = $data.charCol + ' From Script';
        } else if ($operation == 'update') {
            $data.stringCol = $data.charCol + ' Update From Script';
        }
    };


    $scope.UserTable1Deselect = function($event, $isolateScope, $rowData) {
        debugger
    };

}]);



Application.$controller("AllTypesTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("UserTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customRowAction = function($event, $rowData) {
            debugger
            $scope.Widgets.UserTable1.editRow();
        };


        $scope.customRow1Action = function($event, $rowData) {
            debugger
            $scope.Widgets.UserTable1.cancelRow();
        };

    }
]);