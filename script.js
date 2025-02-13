const form = document.querySelector(".add");
const todolist = document.querySelector(".list-group") ;

form.addEventListener("keydown",function(e){
    // all needed for adding new items to the list :

    // first checking if the objective is already in the list ; no need to add it once again ;
    if (e.key === 'Enter'){
        e.preventDefault();
        const list = document.querySelectorAll("span");
        let todo = form.querySelector('input[name="add"]').value ;
        for (let i =0 ; i<list.length ; i++){
        
            if (todo === list[i].innerText){
                alert("Objective Added already");
                return;
            };
        }
    // then checking if the objective is non empty ;
        
        if (todo != ""){
        let added = document.createElement("li");
        added.innerHTML = `<span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>`;
        
        added.classList.add("list-group-item","d-flex", "justify-content-between", "align-items-center");

        todolist.appendChild(added);
        };
        
    
};


    // all needed for the search of the objectives ;

    const search = document.querySelector(".search") ;
    search.addEventListener("keydown",function(e){
        e.preventDefault();
        let search_value = search.querySelector('input[name="search"]').value;
        


    });



});
