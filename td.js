
let taskInput = document.getElementById("taskInput");
let taskTable = document.getElementById("taskTable");


function addFun(){
    let todo = taskInput.value.trim();

    if (todo === "") {
        alert("Please enter a task!");
        return;
        
    }
    let tr = document.createElement("tr")
  
    tr.innerHTML = `
    <td style="width: 508px; height: 40px;"><p>${todo}</p></td>
     <td width: 100px; height: 40px;> <button class="btn" onclick="rem(this)"> Remove</button></td>       
    `
    taskTable.appendChild(tr)
    taskInput.value =""
     
}


function rem(clr){
    let tr = clr.closest("tr"); 
    tr.remove()
}


