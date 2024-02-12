var textarry
var latest=0
var time=-4000
var speedcount=0
var duration=0
function start(){
    var Text =document.getElementById("starttextarea")
    if(Text.value===""){
        alert("pleas enter a Text first")
    } else {
         
        slicetext(Text.value)
        document.getElementById("startbox").classList.add("statboxout")
        document.getElementById("Typebox").classList.add("Typeboxin")
    }
    setTimeout(function(){
        console.log("now")
        document.addEventListener("keydown",function(event){
            for(i=0;i<document.getElementsByClassName("Star").length;i++){
                // document.getElementsByClassName("Star")[i].style.width=`${10/duration}vh`
            }
        
            // console.log(event.key)
            if(textarry===undefined){
                return
            }
            // console.log(event.key)
            if(event.key===textarry[latest]){
                latest++
                speedcount= speedcount+1
                console.log(speedcount)
                document.getElementById("clicksound").play()
                creatstars()
                render()
                
            }
        })
    },5000)
    var timerintervall =setInterval(timmer,100)
    return
}
var timespeed =setInterval(gestspeed,1000)

function slicetext(Text){
    textarry= Text.replace(/(\r\n|\n|\r)/gm, " ").split("")
    render()
    return
}


function render(){
    var dont=""
    var next=""
    for(i=0;i<latest;i++){
        // if(textarry[i]=="")
        if(textarry[i]!=undefined){
            if(textarry[i]===" "){
                dont=dont+" &nbsp " 
            } else {
                dont=dont+textarry[i]
            }
        }
        
    }
    document.getElementById("nowt").innerHTML=textarry[latest]
    document.getElementById("donetext").innerHTML=dont
    for(i=latest+1;i<textarry.length;i++){
        if(textarry[i]===" "){
            next=next+" &nbsp " 
        }else if(textarry[i]===undefined){
            document.getElementById("futertext").innerHTML=next
            return
        }else {
            next=next+textarry[i]
        }
       
    }
    document.getElementById("futertext").innerHTML=next

}

function creatstars(){
    console.log(duration)
    var starhtml=""
    for(i=Math.floor(Math.random()*2)+1;i<4;i++){
        starhtml=starhtml+`<div class="Star" style="top:${Math.floor(Math.random()*100)}vh; animation-duration:${duration}s;padding:${Math.random()*1}vh;width:${10/duration}vh">${textarry[latest-1]}</div>`
    }
    var div1 =document.createElement('div')
    div1.innerHTML=starhtml
    document.body.appendChild(div1)
    setTimeout(function(){
        div1.remove();
    },duration*1000)
}


function timmer(){
    if(time===-3000){
        document.getElementById("racestart").play()
        document.getElementById("nowt").innerHTML=3
    }else if(time===-2000){
        document.getElementById("nowt").innerHTML=2
    }else if(time===-1000){
        document.getElementById("nowt").innerHTML=1
    }else if(time===0){
        document.getElementById("nowt").innerHTML=textarry[latest]
    }
    time=time+100
    if(time/1000<60){
        // console.log(`${time/1000}s`)
    }
}
function gestspeed(){
    duration=10*(1/(speedcount/2))
    speedcount=1
    console.log(duration)
}