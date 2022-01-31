var sallemanager = new salleManager();
var selectRow = null;
var rowId;

document.getElementById('tableSubmit').addEventListener('submit', function(event){
event.preventDefault();
var salle = readSalle();
if(selectRow == null){
 sallemanager.addSalle(Salle);

}

else{
if(confirm('are you sure')){
    salle.id = rowId;
    sallemanager.Modify(salle);

}
}
insertSalle();
reset();



});

function readSalle(){
    Salle = new salle
    Salle.number = document.getElementById('number').value;
    Salle.nature = document.getElementById('nature').value;

    return Salle
}

function insertSalle() {

list = salleManager.salleList
let table = document.getElementsByTagName('tbody')[0];
while (table.rows.length > 0){
    table.deleteRow(0)
}


for (let i = 0; i < list.length; i++) {
    newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0).innerHtml = list[i].id
    cell1 = newRow.insertCell(0).innerHtml = list[i].number
    cell1 = newRow.insertCell(0).innerHtml = list[i].nature

    var editButton = document.createElement('button')
    var editContent = document.createTextNode('edit')

    editButton.appendChild(editContent)
    editButton.setAttribute('onlick','Edit(this)')

    var deleteButton = document.createElement('button');
    var deleteContent = document.createTextNode('Delete');
    deleteButton.appendChild(deleteContent);
    deleteButton.setAttribute('onclick', 'Delete(this)')

    cell4 = newRow.insertCell(3).appendChild(editButton);
    cell4 = newRow.insertCell(3).appendChild(deleteButton);
}
}

function reset(){
    document.getElementById('number').value=""
    document.getElementById('nature').value=""
    selectRow = null
}

function Edit(buttonReference){
  
    selectRow = buttonReference.parentElement.parentElement;
     var rowId = selectRow.cells[0].innerHTML;
    var salle = sallemanager.getSale(rowId);
    document.getElementById('number').value = salle.number;
    document.getElementById('nature').value = salle.nature;

}

function Delete(buttonReference){
    if(confirm("detele it ?"))

    row=buttonReference.parentElement
    rowId = row.cell[0].innerHTML
    document.getElementById('table').deleteRow(row.indexRow)
    sallemanager.DeleteSale(rowId)
}
