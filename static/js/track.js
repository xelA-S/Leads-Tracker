let Links=["test.com"]
const inputElement=document.getElementById("input");
const saveElement=document.getElementById("save");
const listElement=document.getElementById("list");
const DeleteElement=document.getElementById("delete");
let linksFromLocalStorage = JSON.parse( localStorage.getItem("links") )

if(linksFromLocalStorage){
    Links=linksFromLocalStorage
    renderLinks()
}



console.log(linksFromLocalStorage)

saveElement.addEventListener("click",function(){
    Links.push(inputElement.value);
    localStorage.setItem("links", JSON.stringify(Links))
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

DeleteElement.addEventListener("dblclick",function( ){
    localStorage.clear()
    Links=[]
    renderLinks()

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