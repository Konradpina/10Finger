var textarry
var latest=0
function start(){
    var Text =document.getElementById("starttextarea")
    if(Text.value===""){
        alert("pleas enter a Text first")
    } else {
        console.log(Text.value)
        slicetext(Text.value)
        document.getElementById("startbox").style.opacity=0
        document.getElementById("Typebox").style.opacity=1
    }
    return
    
}

function slicetext(Text){
    textarry= Text.replace(/(\r\n|\n|\r)/gm, " ").split("")
    render()
    return
}

document.addEventListener("keydown",function(event){
    console.log(event.key)
    if(textarry===undefined){
        return
    }
    console.log(event.key)
    if(event.key===textarry[latest]){
        latest++
        render()
    }
})
function render(){
    var dont=""
    var next=""
    for(i=latest-5;i<latest;i++){
        // if(textarry[i]=="")
        if(textarry[i]!=undefined){
            if(textarry[i]===" "){
                dont=dont+" &nbsp " 
            } else {
                dont=dont+textarry[i]
            }
        }
        
    }
    document.getElementById("donetext").innerHTML=dont
    for(i=latest;i<latest+9;i++){
        if(textarry[i]===" "){
            next=next+" &nbsp " 
        }else if(textarry[i]===undefined){
            return
        }else {
            next=next+textarry[i]
        }
       
    }
    document.getElementById("futertext").innerHTML=next

}