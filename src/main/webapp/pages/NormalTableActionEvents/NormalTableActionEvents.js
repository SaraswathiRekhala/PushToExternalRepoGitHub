var wmToaster = App.getDependency("ToasterService");
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

Partial.DepartmentTable1_customButtonAction = function ($event) {
    debugger;
    var selectedField = Partial.Variables.staticVarSelectColumns.dataSet;
    var fieldJson = {};

    _.forEach(Partial.Widgets.DepartmentTable1.selectedColumns, function (value, key) {
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
        Partial.Variables.staticVarShowAllFieldsButton.setValue("dataValue", true);
    }
    Partial.Widgets.DepartmentTable1.redraw();
    Partial.Variables.staticVarSelectColumns.setValue("fieldName", JSON.stringify(fieldJson));
    console.log(Partial.Variables.staticVarSelectColumns.getData());
};

Partial.DepartmentTable1_customButton1Action = function ($event) {
    debugger;
    var selectedField = Partial.Variables.staticVarSelectColumns.dataSet;
    var fieldJson = {};

    //Update hiddenColumns array AND hide columns
    fieldJson.hiddenColumns = [];
    _.forEach(Partial.Widgets.DepartmentTable1.columns, function (value) {
        //Show all in data grid
        value.show = true;
    });

    Partial.Widgets.DepartmentTable1.redraw();
    //Update local static Settings Variable
    Partial.Variables.staticVarSelectColumns.setValue("fieldName", JSON.stringify(fieldJson));
};

Partial.DepartmentTable1_customRow2Action = function ($event, $rowData) {
    debugger;
    wmToaster.show('success', 'SUCCESS', "The RowData is: " + $rowData.name, 8000);
};

