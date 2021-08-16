const inputElement=document.getElementById("input");
const saveElement=document.getElementById("save");
let Leads=[]



saveElement.addEventListener("click",function(){
    Leads.push(inputElement.value)
})

 