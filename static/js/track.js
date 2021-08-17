let Links=[]
const inputElement=document.getElementById("input");
const saveElement=document.getElementById("save");
const listElement=document.getElementById("list");
const DeleteElement=document.getElementById("delete");
const saveTabElement=document.getElementById("saveTab")
let linksFromLocalStorage = JSON.parse( localStorage.getItem("links") )


if(linksFromLocalStorage){
    Links=linksFromLocalStorage
    renderLinks(Links)
}



console.log(linksFromLocalStorage)

saveElement.addEventListener("click",function(){
    Links.push(inputElement.value);
    localStorage.setItem("links", JSON.stringify(Links))
    inputElement.value=""
    renderLinks(Links)
})

inputElement.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        Links.push(inputElement.value);
        localStorage.setItem("links",JSON.stringify(Links))
        inputElement.value=""
        renderLinks(Links)
    }
})


saveTabElement.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        Links.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(Links) )
        renderLinks(Links)
   
    })

})

DeleteElement.addEventListener("dblclick",function( ){
    localStorage.clear()
    Links=[]
    renderLinks(Links)

})


function renderLinks(someLinks){
    let listItems=""
    for(let i=0; i < someLinks.length; i++){
        listItems+=`
        <li>
            <a target="_blank" href="https://${someLinks[i]}">
                ${someLinks[i]}
            </a>
         </li>`;
    }
    listElement.innerHTML=listItems
}