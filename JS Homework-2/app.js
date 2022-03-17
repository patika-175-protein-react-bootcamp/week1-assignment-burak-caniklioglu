const inputText = document.querySelector("#task")
const button = document.querySelector(".add-btn")
const form = document.querySelector("#add-task")
const list = document.querySelector(".todolist-list-container")



// functions
const createTask = (taskText) => {
    return `<div class="list-group">
    <li class="unchecked">${taskText}</li>
    <button class="btn">&#128473;</i></button>
</div>`
} 



//events
// add task eventbutton
button.addEventListener("click", (e)=>{
    e.preventDefault()


    if(inputText.value){
        list.innerHTML += createTask(inputText.value)
        form.reset();
    }else{
        alert("Please select a task")
    }
    completedTaskCount()
})



list.addEventListener("click", e => {
    // delete task
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove();
    }

    //check & uncheck
    if(e.target.classList.contains("unchecked")){
        e.target.className = "checked"
    }else{
         e.target.className = "unchecked"
        
    }
    completedTaskCount()
})




const completedTaskCount = () => {
    let checkedCount = list.getElementsByClassName("checked").length
    let taskCount = list.getElementsByClassName("list-group").length
    console.log(taskCount, checkedCount)
    const checkedTasks = document.querySelector("#checkedTasks")
    const allTasks = document.querySelector("#allTasks")
    checkedTasks.innerText = checkedCount
    allTasks.innerText = taskCount

}

completedTaskCount()