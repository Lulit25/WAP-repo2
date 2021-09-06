function decorate(){
    

    var txt = document.getElementById("text")
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');    
     alert(style);    
    var size = parseFloat(style); 
    document.getElementById("text").style.fontSize =(size + 2) + 'px';

}

const checkbox = document.getElementById('check');
checkbox.addEventListener('change', (event) =>{

    if ( event.target.checked ) {
        alert( "checked");
        document.getElementById("text").style.fontWeight ="bold";
        document.getElementById("text").style.color ="green";
        document.getElementById("text").style.textDecoration ="underline";
        document.body.style.backgroundImage = "url('images/background.png')";


        
    } else {
        // Returns false if not checked
        document.getElementById("text").style.fontWeight ="";
        document.getElementById("text").style.color ="black";
        document.getElementById("text").style.textDecoration ="none";
        document.body.style.backgroundImage = "url('')";

    }


   
});

btn2=document.getElementById("btn2"); 
var txt = document.getElementById("text");
btn2.onclick =function(){
    var output =" ";
    const str = txt.value.split(" ");
    for(let i=0; i<str.length;i++){
  
        var start = str[i].charAt(0);
        let temp = " ";
        switch(start){
            case 'a' :
            case 'e':
            case 'i' :
            case 'o':
            case 'u' :
            case 'A' :
            case 'E':
            case 'I' :
            case 'O':
            case 'U' :
                temp = str[i] +"ay ";
                output = output + temp;
                temp =" ";
            break;
            default:
                temp = str[i].substring(1);
                temp = temp + start + "ay ";
                output = output + temp;
                temp =" ";
            break;

        }
       
    }
    txt.value = output;
}
btn1=document.getElementById("btn1"); 

btn1.onclick = function(){
    var txt2 = document.getElementById("text");

    var output =" ";
    const str = txt2.value.split(" ");
    let temp =" ";
    for(let i=0; i<str.length;i++){
        if(str[i].length>=5){
            temp ="Malkovitch";
        }else {
            temp = str[i];
        }
       output = output+ temp +" ";
    }
    txt2.value = output;
}