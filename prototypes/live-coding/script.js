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
}
}
