/**
 * Created by user on 26.07.16.
 */
function TableEmpls(data) {
    Table.call(this);
    this.list = data;

    var buttonEdit = new this.Button(function () {
        alert("EmplEdit!!");
    }, "Edit",  "btn btn-primary")
    var buttonDelete = new this.Button(function () {
        alert("EmplDelete!!");
    }, "Delete", "btn btn-danger")

    this.buttonAdd = new this.Button(function () {
        alert("EmplAdd!!");
    }, "Add", "btn btn-primary");

    this.createButtons = function () {
        var buttons = [];
        buttons.push(this.createButton(buttonEdit.action, buttonEdit.name, buttonEdit.className));
        buttons.push(this.createButton(buttonDelete.action, buttonDelete.name, buttonDelete.className));
        return buttons;
    }

    this.createHeader = function () {
        var tr = document.createElement('tr');
        var firstname = document.createElement('th');
        firstname.innerHTML = "Firstname";
        tr.appendChild(firstname);
        var lastname = document.createElement('th');
        lastname.innerHTML = "Lastname";
        tr.appendChild(lastname);
        var birthday = document.createElement('th');
        birthday.innerHTML = "Birthday";
        tr.appendChild(birthday);
        var salary = document.createElement('th');
        salary.innerHTML = "Salary";
        tr.appendChild(salary);
        return tr;
    }

}
