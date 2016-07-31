// $(document).ready(function () {
//     $.ajax({
//         url: "/getAllDeps",
//         success: function (data) {
//             new Controller().showTable(data)
//         }
//     });
// });

var validator = new Validator();
var sender = new SenderService();
var controller = new Controller();


$(document).ready(function () {
    sender.loadTable();
});

function SenderService() {


    this.submitDep = function () {
   //     var form = $('#formDeps');
       var form = document.getElementById("formDeps");
        if (!validator.validate(form)) {
            return false;
        }
        var data = {};
        $.each(form.elements, function(i, v){
            var input = $(v);
            data[input.attr("name")] = input.val();
            delete data["undefined"];
        });
        $.ajax({
            url : "/addDep",
            type: "POST",
            dataType : "json",
            data : JSON.stringify(data),
            contentType: "application/json",
            success: function (data) {
                controller.showTable(data);
            }
        });
    };

    this.deleteDep = function (id) {
        $.ajax({
            url : "/deleteDep",
            type: "POST",
            data :id,
            contentType: "application/json",
            success: function (data) {
                controller.showTable(data);
            }
        });
    }
        


    this.loadTable = function () {
        $.ajax({
            type: "GET",
            url: "/getAllDeps",
            success: function (data) {
                controller.showTable(data);
            }
        });

    }
}


function Controller() {

    var table;
    var form;

    this.showTable = function (data) {
        if (form) {
            form.clear();
        }
        table = new TableDeps(data);
        table.subscribe('buttonClick', this.a, this );
        table.subscribe('addDep', this.showFormAddDep, this);
        table.subscribe('deleteDep', function (data) {
            sender.deleteDep(data);
        }, sender);
        table.show();
    };

    this.a = function () {
        alert("AAAAAAAAAAAAAA");
    }

    this.showFormAddDep = function () {
        if (table) {
            table.clear();
        }
        form = new FormDeps();
        form.subscribe("DepFormOk", sender.submitDep, sender);
        form.subscribe("DepFormCancel", sender.loadTable, sender);
        form.show();
    }
}

// EventSupport = function() {
//
//     this.trigger = function(event, data) {
//         $(this).trigger(event, data);
//     };
//
//     this.subscribe = function(event, fn, context) {
//         $(this).on(event, $.proxy(fn, context))
//     };
//
//     this.start = function() {
//         var $this = this;
//
//         setInterval(function() {
//             $this.onClick();
//         }, 1000);
//     };
//
//     this.onClick = function() {
//         // action
//         console.log('onClick');
//         this.trigger('clicked', {date:new Date().getTime()});
//     };
//
//     this.start();
// };
//
// var obj = new EventSupport();
//
// obj.subscribe('clicked', function(e, data) {
//     console.log('AAAA', data);
// }, window);