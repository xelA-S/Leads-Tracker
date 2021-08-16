const inputElement=document.getElementById("input");
const saveElement=document.getElementById("save");
const listElement=document.getElementById("list");
let Leads=[]




saveElement.addEventListener("click",function(){
    Leads.push(inputElement.value);
    for(let i=0; i < Leads.length; i++){
        listElement.innerHTML+="<li>" + Leads[i] + "</li>";
    }
    
})
