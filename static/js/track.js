const inputElement=document.getElementById("input");
const saveElement=document.getElementById("save");
const listElement=document.getElementById("list");
let Links=[]
let linksFromLocalStorage=JSON.parse(localstorage.getItem("links"))

if(linksFromLocalStorage){
    Links=linksFromLocalStorage
    renderLinks()
}

saveElement.addEventListener("click",function(){
    Links.push(inputElement.value);
    localStorage.setItem("links",JSON.stringify(Links))
    inputElement.value=""
    renderLinks()
})

inputElement.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        Links.push(inputElement.value);
        localStorage.setItem("links",JSON.stringify(Links))
        inputElement.value=""
        renderLinks()
    }
})


function renderLinks(){
    let listItems=""
    for(let i=0; i < Links.length; i++){
        listItems+=`
        <li>
            <a target="_blank" href="https://${Links[i]}">
                ${Links[i]}
            </a>
         </li>`;
    }
    listElement.innerHTML=listItems
}