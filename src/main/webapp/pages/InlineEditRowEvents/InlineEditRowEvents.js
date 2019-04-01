var wmToaster = App.getDependency("ToasterService");
/* perform any action on widgets/variables within this block */

Page.onReady = function() {
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
var sortCol = "";
Page.AllTypesTable1Beforerowinsert = function($event, widget, $rowData) {
  debugger;
  $rowData.textCol = $rowData.textCol + ' Script';
  //Set the input as $rowData for variable
  Page.Variables.LV_InsertData.setInput($rowData);
  //Insert the data by invoking the variable
  Page.Variables.LV_InsertData.createRecord({}, function() {
  //On success, call the refreshData on method to get the refreshed data
  widget.refreshData();
});
  // if ($rowData.stringCol.length < 6) {
  //     wmToaster.show('error', 'ERROR', 'StringCol length too small');
  //     return false;
  // }
};
Page.AllTypesTable1Select = function($event, widget, $rowData) {
  debugger;
  console.log("The row data is: ", $rowData);
  Page.Widgets.AllTypesTable1.filtermode = 'multicolumn';
  wmToaster.show('success', 'SUCCESS', "Triggered onSelect() event", 9000);
};
// Page.AllTypesTable1Deselect = function($event, widget, $rowData) {
//     debugger
//     console.log("The row data which deleselected is: ", $rowData);
//     //Deleselect All Items
//     Page.Widgets.AllTypesTable1.selecteditem = [];
//     //Set Sorting property of PKID to false
//     Page.Widgets.AllTypesTable1.columns.pkId.setProperty('sortable', false);
//     wmToaster.show('success', 'SUCCESS', "Triggered onDeselect() event", 9000);
// };
Page.AllTypesTable1Sort = function($event, $data) {
  debugger;
  console.log("The sort column data: ", $data.data);
  wmToaster.show('success', 'SUCCESS', "Sorting applied: " + sortCol, 9000);
};
Page.AllTypesTable1Headerclick = function($event, $data) {
  debugger;
  console.log("The column data with column field:", $data.field, $data);
  sortCol = $data.field;
  wmToaster.show('success', 'SUCCESS', "Triggered onHeaderClick() event", 9000);
};
Page.AllTypesTable1Rowclick = function($event, widget, $rowData) {
  debugger;
  console.log("The clicked row data is: ", $rowData);
  wmToaster.show('success', 'SUCCESS', "Triggered onRowClick() event", 9000);
};
Page.AllTypesTable1Rowdblclick = function($event, widget, $rowData) {
  debugger;
  console.log("The clicked row data is:", $rowData);
};
Page.AllTypesTable1Columnselect = function($event, $data) {
  debugger;
  console.log("The column data with column field:", $data.colDef.field, $data.data);
  wmToaster.show('success', 'SUCCESS', "Triggered onColumnSelect() event", 9000);
};
Page.AllTypesTable1Columndeselect = function($event, $data) {
  debugger;
  console.log("The column data with column field:", $data.colDef.field, $data.data);
};
// Page.AllTypesTable1Beforeformrender = function($event, widget, $rowData, $operation) {
//     debugger
// };
// Page.AllTypesTable1Formrender = function($event, widget, formWidgets, $operation) {
//     debugger
// };
Page.AllTypesTable1Rowdelete = function($event, widget, $rowData) {
  debugger;
  onsole.log("The deleted row data:", $rowData);
};
Page.AllTypesTable1Rowinsert = function($event, widget, $rowData) {
  debugger;
  console.log("The inserted row data:", rowData);
};
Page.AllTypesTable1Beforerowupdate = function($event, widget, $rowData) {
  debugger;
  if ($data.stringCol.length < 4) {
    wmToaster.show('error', 'ERROR', 'StringCol length too small');
    return false;
  }
  $data.dateCol = Date.now();
};
Page.AllTypesTable1Rowupdate = function($event, widget, $rowData) {
  debugger;
  console.log("The deleted row data:", $rowData);
};
Page.AllTypesTable1Beforedatarender = function(widget, $data, $columns) {
  debugger;
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
Page.AllTypesTable1Datarender = function(widget, $data) {
  debugger;
  widget.datagridElement.find('tr.app-datagrid-row').each(function(index) {
  //Loop through the rows. Add class for users having booleanCol as Success
  if ($data[index].booleanCol === 'Failure') {
    $(this).addClass('trueClass');
  }
});
};
Page.AllTypesTable1Setrecord = function($event, $data) {
  debugger;
};
Page.AllTypesTable1Error = function($event, widget, $data, $operation) {
  debugger;
  if ($operation == 'insert') {
    $data.stringCol = $data.charCol + ' From Script';
  } else if ($operation == 'update') {
    $data.stringCol = $data.charCol + ' Update From Script';
  }
};
Page.UserTable1Deselect = function($event, widget, $rowData) {
  debugger;
};
Page.UserTable1_customRowAction = function($event, $rowData) {
  debugger;
  Page.Widgets.UserTable1.editRow();
};
Page.UserTable1_customRow1Action = function($event, $rowData) {
  debugger;
  Page.Widgets.UserTable1.cancelRow();
};
