
function Table() {
   EventSupport.call(this);
    
    var table;

    
    this.createButton = function (action, innerHtml, classAttr, data) {
        var td = document.createElement("td");
        td.setAttribute("class", "noWrap");
    //    var button = new Button('Addd', td);
       var button = document.createElement("button");
       button.setAttribute("class", classAttr);
       button.innerHTML= innerHtml;
       var context = this;
       button.onclick = function(){ context.trigger(action, data);};
       td.appendChild(button);
        return td;
    };

    this.show = function () {
        var rows = this.createRows();
        table = document.createElement('table');
        table.setAttribute("class", "table-condensed");
      
        for (var i = 0; i < rows.length; i++) {
            table.appendChild(rows[i]);
        }
       
            var addBut = document.createElement('tr');
            addBut.appendChild(this.buttonAdd);
            table.appendChild(addBut);
        

        document.body.appendChild(table);
    };

    this.clear = function () {
        if (table) {
            document.body.removeChild(table);
        }

    };

    this.createRows = function () {
        var rows = [];
        var header = this.createHeader();

        rows.push(header);

        for (var i = 0; i < this.list.length; i++) {
           
            var tr = document.createElement('tr');
            var buttons = this.createButtons(this.list[i]['id']);
            for (var name in this.list[i]) {

             
                if (name !== "id") {
                    var td = document.createElement('td');
                    var value = this.list[i][name];
                    td.innerHTML = value;
                    tr.appendChild(td);

                    for (var k = 0; k < buttons.length; k++) {
                        tr.appendChild(buttons[k]);
                    }
                                    
                    rows.push(tr);
                }
            }
        }
        return rows;
    }
}

