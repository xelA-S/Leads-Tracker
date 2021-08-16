const inputElement=document.getElementById("input");
const saveElement=document.getElementById("save");
const listElement=document.getElementById("list");
let Links=[]
let listItems=""




saveElement.addEventListener("click",function(){
    Links.push(inputElement.value);
    renderLinks()
})



function renderLinks(){
    for(let i=0; i < Links.length; i++){
        listItems+="<li>" + Links[i] + "</li>";
    }
    listElement.innerHTML=listItems
}