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

Page.button1Click = function ($event, widget) {
    Page.Variables.HrdbDepartmentData.listRecords();
};

Page.DepartmentTable1_customRowAction = function ($event, $rowData) {
    debugger;
    alert("Welcome to: " + $rowData.name);
};

