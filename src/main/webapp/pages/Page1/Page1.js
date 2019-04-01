/* perform any action on widgets/variables within this block */

Page.onReady = function () {
    /*
     * variables can be accessed through 'Page.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Page.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Page.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Page.Widgets.username.datavalue'
     */

};

Page.UserTable1Beforeformrender = function ($event, widget, $rowData, $operation) {
    debugger;
    if ($rowData.role === 'admin') {
        wmToaster.show('error', 'error', 'Admin row can not be edited');
        return false;
    }
    if (!$rowData.password) {
        $rowData.password = $rowData.username + '@';
    }
    if ($operation === 'new') {
        $rowData.role = 'user';
    }
};

Page.UserTable1_1Beforeformrender = function ($event, widget, $rowData, $operation) {
    debugger;
    if ($rowData.role === 'admin') {
        wmToaster.show('error', 'error', 'Admin row can not be edited');
        return false;
    }
    if (!$rowData.password) {
        $rowData.password = $rowData.username + '@';
    }
    if ($operation === 'new') {
        $rowData.role = 'user';
    }
};

Page.EmployeeTable1Deselect = function ($event, widget, $rowData) {
    debugger;
    Page.Widgets.EmployeeTable1.selecteditem = [1, 2, 4, 5];
};

Page.UserTable1_usernameOnClick = function ($event, widget, rowData) {
    debugger;
};

Page.AllTypesTable1_customRowAction = function ($event, $rowData) {};

