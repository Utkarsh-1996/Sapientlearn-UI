
(function(){
    "use strict"
    var columnNames=[]
    var students=[{name:"Utkarsh", age:"22"},{name:"Abhishek", age:"22"},{name:"Sreeraksha", age:"22"},{name:"Sammed", age:"21"},{name:"Amitesh", age:"22"}]
    function createElement(elementType){
        return document.createElement(elementType);

    }
    function createHeaderRow(){
        var headerRow=createElement('tr');
        for(var i in students[0]){ 
            var column=createElement('th');
            column.innerHTML=i;
            headerRow.appendChild(column)
            columnNames.push(i)
        }
        console.log(headerRow)
        return headerRow
    }
    function createDataRow(x){
        // for (var x=0;x<students.length;x++){
            var dataRow=createElement('tr')
            for (var columns=0;columns<columnNames.length;columns++){
                var dataColumn=createElement("td")
                dataColumn.innerHTML=students[x][columnNames[columns]];
                dataRow.appendChild(dataColumn)
            }
            var tdForButton=createElement('td')
            var button=createElement('button')
            button.className="btn btn-primary"
            tdForButton.appendChild(button)
            dataRow.appendChild(tdForButton)
            button.innerHTML="Delete"
            // button.id='button'+x;
            // button.onclick=function(){window.alert('clicked'+this.id)}
        //}
        console.log(dataRow)
        return dataRow
    }
    function createTable(){
        var tbl=document.getElementById("tblEmployees")
        tbl.className="table table-striped table-dark"
        console.log(tbl)
        tbl.appendChild(createHeaderRow())
        for (var i=0;i<students.length;i++){
            tbl.appendChild(createDataRow(i))
        }
        var buttons=document.getElementsByClassName('btn');
        for (var r=0;r<buttons.length;r++){
            buttons[r].addEventListener('click', function(){
                console.log(r['rowNumber'])
                console.log(this['rowNumber'])
                this.parentNode.parentNode.remove();
            })
        }
    }
    createTable()
})();