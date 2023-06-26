let addButton = document.querySelector('#addBtn');

let inputBox = document.querySelector('#myText');

let listContainer = document.querySelector('ul');

addButton.addEventListener('click',()=>{
    if(inputBox.value.length == 0){
        alert("Please add an input")
    }else{
        let list_element = document.createElement("li");
        list_element.innerHTML = inputBox.value;
        listContainer.appendChild(list_element)

         let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        list_element.appendChild(span)
    }
    inputBox.value = "";
    storeData()
})

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
     if(inputBox.value.length == 0){
        alert("Please add an input")
    }else{
        let list_element = document.createElement("li");
        list_element.innerHTML = inputBox.value;
        listContainer.appendChild(list_element)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        list_element.appendChild(span)
        
    }
    inputBox.value = "";
    storeData()
  }
});

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        storeData()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        storeData()
    }
})


function storeData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function displaySavedData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

displaySavedData()