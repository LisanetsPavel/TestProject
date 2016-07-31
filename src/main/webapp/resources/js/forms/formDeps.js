/**
 * Created by user on 27.07.16.
 */
function FormDeps(){
    Form.call(this);
    this.cancel = 'DepFormCancel';
    this.ok = 'DepFormOk';
    


    


    this.formId  = "formDeps";
    
    
    var inputs = [new this.InputForm("Type name", "name")];

    this.createInputForms = function () {
        var inputForms = [];

        for (var i = 0; i < inputs.length; i++){
            inputForms.push(this.createInputForm(inputs[i].text, inputs[i].name));
        }
       
        inputForms.push(this.createInputButt());
        return inputForms;
    }
    
}