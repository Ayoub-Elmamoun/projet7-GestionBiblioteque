var selectedRow = null
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validate()) {
        var work = readwork();
        if (selectedRow == null)
            insertNewRow(work);
        else
        if (confirm("Êtes-vous sûr de modifier cette œuvre?"))
            editRow(work)
        resetForm();
    } else {
        alert("S'il-vous-plaît remplissez tous les champs requis")
    }
})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputAuthor").value = "";
    document.getElementById("inputPrix").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputLanguage").value = "";
    document.querySelector('input[name="workType"]:checked').checked = false
    selectedRow = null;
}

var onEditButton = document.getElemen

function readwork() {

    var work = {};
    work.title = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    work["type"] = document.querySelector('input[name="workType"]:checked').value
    return work;
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = work.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = work.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = work.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = work.type
    cell7 = newRow.insertCell(6)

    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.className = "btn btn-primary"
    editButton.setAttribute('onclick', 'onEdit(this)')

    var deleteContent = document.createTextNode('Delete')
    deleteButton.appendChild(deleteContent)
    deleteButton.className = "btn btn-secondary"
    deleteButton.setAttribute("onclick", 'onDelete(this)')

    cell7.appendChild(editButton)
    cell7.appendChild(deleteButton)

}
