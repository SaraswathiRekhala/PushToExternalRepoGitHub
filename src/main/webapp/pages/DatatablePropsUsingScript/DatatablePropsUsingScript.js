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

Page.titleTextChange = function ($event, widget, newVal, oldVal) {
    Page.Widgets.DepartmentTable1.title = newVal;
};

Page.subHeadingTextareaChange = function ($event, widget, newVal, oldVal) {
    Page.Widgets.DepartmentTable1.subheading = newVal;
};

Page.spacingSelectChange = function ($event, widget, newVal, oldVal) {
    Page.Widgets.DepartmentTable1.spacing = newVal;
};

Page.loadingIconTextChange = function ($event, widget, newVal, oldVal) {
    Page.Widgets.DepartmentTable1.loadingicon = 'wi wi-spinner fa-spin';
    Page.Widgets.DepartmentTable1.loadingdatamsg = newVal;
};

Page.iconClassTextChange = function ($event, widget, newVal, oldVal) {
    Page.Widgets.DepartmentTable1.iconclass = newVal;
};

Page.button1Click = function ($event, widget) {
    Page.Variables.HrdbDepartmentData.listRecords();
};

Page.showHeaderToggleChange = function ($event, widget, newVal, oldVal) {
    debugger;
    if (newVal) {
        Page.Widgets.DepartmentTable1.showheader = true;
    } else {
        Page.Widgets.DepartmentTable1.showheader = false;
    }
};

Page.searchSelectChange = function ($event, widget, newVal, oldVal) {
    debugger;
    if (newVal == 'No Filter') {
        Page.Widgets.DepartmentTable1.filtermode = newVal;
    } else if (newVal == 'Search') {
        Page.Widgets.DepartmentTable1.filtermode = 'search';
    } else if (newVal == 'Multi-column') {
        Page.Widgets.DepartmentTable1.filtermode = 'multicolumn';
    }
};

Page.widthTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.width = newVal;
};

Page.radioColToggleChange = function ($event, widget, newVal, oldVal) {
    debugger;
    if (newVal) {
        Page.Widgets.DepartmentTable1.radioselect = true;
    } else {
        Page.Widgets.DepartmentTable1.radioselect = false;
    }
};

Page.enableSortToggleChange = function ($event, widget, newVal, oldVal) {
    debugger;
    if (newVal) {
        Page.Widgets.DepartmentTable1.enablesort = true;
    } else {
        Page.Widgets.DepartmentTable1.enablesort = false;
    }
};

Page.colSelectionToggleChange = function ($event, widget, newVal, oldVal) {
    debugger;
    if (newVal) {
        Page.Widgets.DepartmentTable1.enablecolumnselection = true;
    } else {
        Page.Widgets.DepartmentTable1.enablecolumnselection = false;
    }
};

Page.deleteMsgTextareaChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.confirmdelete = newVal;
};

Page.msgOnDeleteTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.deletemessage = newVal;
};

Page.noDataMsgTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.nodatamessage = newVal;
};

Page.dataLoadingMsgTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.loadingdatamsg = newVal;
};

Page.confirmTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.deleteoktext = newVal;
};

Page.cancelTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.deletecanceltext = newVal;
};

Page.rowClassTextChange = function ($event, widget, newVal, oldVal) {
    debugger;
    Page.Widgets.DepartmentTable1.rowclass = newVal;
};

Page.DepartmentTable1_customRowAction = function ($event, $rowData) {
    debugger;
    alert("Welcome to: " + $rowData.name);
};

