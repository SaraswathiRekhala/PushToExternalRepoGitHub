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

Page.executeSV_AllTypesDataTable1_customButtonAction = function ($event) {
    Page.Actions.navigateToAcc2.navigate();
};

Page.executeSV_AllTypesDataTable2_customButtonAction = function ($event) {
    debugger;
    Page.Widgets.executeSV_AllTypesDataTable1.selecteditem = [];
};

