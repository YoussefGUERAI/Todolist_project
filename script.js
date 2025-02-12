const form = document.querySelector(".add");
const todolist = document.querySelector(".list-group") ;

form.addEventListener("keydown",function(e){
    
    if (e.key === 'Enter'){
    e.preventDefault();
    let todo = form.querySelector('input[name="add"]').value ;
    
    if (todo != ""){
    let added = document.createElement("li");
    added.innerHTML = `<span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>`;
    
    added.classList.add("list-group-item","d-flex", "justify-content-between", "align-items-center");

    todolist.appendChild(added);
    };
}

});
