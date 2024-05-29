let screen=document.querySelector('.screen')
function updateScreen(value) {
    screen.value+=value;
    
   
}
 

function calculate() {
    if(screen.value !==''){
    screen.value= eval(screen.value)
    
    } 
}



function clearfield(){
    screen.value='';
   
}


