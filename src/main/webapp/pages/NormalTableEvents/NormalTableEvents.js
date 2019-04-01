/* perform any action on widgets/variables within this block */

Partial.onReady = function () {
    /*
     * variables can be accessed through 'Partial.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Partial.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Partial.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Partial.Widgets.username.datavalue'
     */

};

Partial.DepartmentTable1Show = function () {
    debugger;
    console.log("Data Table has been displayed");
    Partial.Variables.HrdbDepartmentData.listRecords();
};

Partial.DepartmentTable1Hide = function () {
    debugger;
    console.log("Data Table has been hidden");
};

Partial.DepartmentTable1Beforeformrender = function ($event, widget, $rowData, $operation) {
    debugger;
};

