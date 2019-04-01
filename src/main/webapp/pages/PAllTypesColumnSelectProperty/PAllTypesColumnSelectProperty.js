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

Partial.AllTypesTable1Columnselect = function ($event, $data) {
    debugger;
    $data.colDef.show = false;
    Partial.Widgets.AllTypesTable1.subheading = 'The hidden Columns are: "' + $data.colDef.displayName + '" is hidden';
    Partial.Widgets.AllTypesTable1.redraw();
};

