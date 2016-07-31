/**
 * Created by user on 26.07.16.
 */
function Form() {
    EventSupport.call(this);
  
    this.InputForm = function (text, name) {
        this.text = text;
        this.name = name;
    }


    var formDiv = document.createElement('div');
    this.show = function () {
        var form = document.createElement('form');
        formDiv.setAttribute("class", "col-md-6 col-md-offset-3");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("id", this.formId);

        var inputForms = this.createInputForms();

        for (var i = 0; i < inputForms.length; i++) {
            form.appendChild(inputForms[i]);
        }

        formDiv.appendChild(form);
        document.body.appendChild(formDiv);
    };

    this.clear = function () {
        document.body.removeChild(formDiv);
    };
    
    this.createInputForm = function (text, name) {

        var div = document.createElement('div');
        div.setAttribute("class", "form-group");

        var label = document.createElement('label');
        label.setAttribute("class", "control-label col-sm-2");
        label.innerHTML = text;

        var divInput = document.createElement('div');
        divInput.setAttribute("class", "col-sm-10");

        var input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("class", "form-control");
        input.setAttribute("name", name);
  
        
        divInput.appendChild(input);
        div.appendChild(label);
        div.appendChild(divInput);
        return div;

    };

    this.createInputButt = function () {
        var context = this;
        var formGroup = document.createElement('div');
        formGroup.setAttribute("class", "form-group");

        var div = document.createElement('div');
        div.setAttribute("class", "col-sm-offset-2 col-sm-10");

        var buttonOk = document.createElement('button');
        buttonOk.setAttribute("type", "button");
        buttonOk.onclick = function () {
            context.trigger(context.ok);
        };

        buttonOk.setAttribute("class", "btn btn-success");
        buttonOk.innerHTML = "OK";




        var buttonCancel = document.createElement('button');
        buttonCancel.setAttribute("type", "button");
        buttonCancel.setAttribute("class", "btn btn-danger");
        buttonCancel.onclick = function () {
            context.trigger(context.cancel);
        };
        buttonCancel.innerHTML = "Cancel!";

        div.appendChild(buttonOk);
        div.appendChild(buttonCancel);
        formGroup.appendChild(div);
        return formGroup;

    }

}


