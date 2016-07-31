/**
    * Created on 26.07.16.
    */
function TableDeps(data, actions) {
    Table.call(this);
    this.list = data;


   this.buttonAdd =this.createButton('addDep', "Add", "btn btn-primary");

    
    
    // var buttonShowEmployee = new this.Button(function () {
    //     alert("ShowEmpl!!");
    // }, "ShowEmployee", "btn btn-primary");
    // var buttonEdit = new this.Button(function () {
    //     alert("DepEdit!!");
    // }, "Edit", "btn btn-primary");
    // var buttonDelete = new this.Button(function () {
    //     alert("DeplDelete!!");
    // }, "Delete", "btn btn-danger");
   
    
    this.createButtons = function (id) {
        var buttons = [];
        buttons.push(this.createButton('buttonClick', "ShowEmployee", "btn btn-primary", id));
        buttons.push(this.createButton('buttonClick', "Edit", "btn btn-primary", id));
        buttons.push(this.createButton('deleteDep', "Delete", "btn btn-danger", id));

        return buttons;
    }

    this.createHeader = function () {
        var header= document.createElement('th');
        header.innerHTML = "Departments";
        header.setAttribute("class", "dep")
        return header;
    }
}

