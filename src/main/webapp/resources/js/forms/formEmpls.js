/**
 * Created by user on 27.07.16.
 */
function FormEmpls() {
    Form.call(this);

    this.cancel = "/";
    this.formId = "formEmpls";
    
    var allDeps = [{id:1, name:"Dep1"},{id:2, name:"Dep2"},{id:3, name:"Dep3"}];

    var inputs = [new this.InputForm("Firstname", "firstname"),
        new this.InputForm("Lastname", "lastname"),
        new this.InputForm("Birthday", "birthday"),
        new this.InputForm("Email", "email"),
        new this.InputForm("Salary", "salary")
    ];

    this.createInputForms = function () {
        var inputForms = [];

        for (var i = 0; i < inputs.length; i++){
            inputForms.push(this.createInputForm(inputs[i].text, inputs[i].name));
        }
        inputForms.push(this.createSelect());
        inputForms.push(this.createInputButt());
        return inputForms;
    }

    this.createSelect = function(){
        var formGroup = document.createElement('div');
        formGroup.setAttribute("class", "form-group");

        var label = document.createElement('label');
        label.setAttribute("class", "control-label col-sm-2");
        label.innerHTML = "Department";

        var div = document.createElement('div');
        div.setAttribute("class", "col-sm-10")

        var select = document.createElement('select');
        select.setAttribute("class", "form-control");
        select.setAttribute("name", "department");

        for (var i = 0; i < allDeps.length; i++){
            var option = document.createElement('option');
            option.setAttribute("value", allDeps[i].id );
            option.innerHTML = allDeps[i].name;
            select.appendChild(option);
        }

        div.appendChild(select);
        formGroup.appendChild(label)
        formGroup.appendChild(div);

        return formGroup;
    }
}
