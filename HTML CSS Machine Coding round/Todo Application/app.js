const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter something!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = `<li>${inputBox.value}</li>
        <button class="editBtn" onClick="editTask(this)">Edit</button>
        <button onClick="deleteTask()">Delete</button>
        `;
        listContainer.appendChild(li);
        
        // let span = document.createElement("span");
        // span.innerHTML = "\u00d7";
        // li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


function editTask(e){

}

function deleteTask(){
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
}


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();