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