document.addEventListener("DOMContentLoaded",function(event){
    var txt = document.getElementById("txtarea");
    var check =  document.getElementById("bling");
    var btn= document.getElementById("btn");

    btn.onclick = function(){
        setInterval(bigger, 500);
    }
    
   function bigger(){
    var computedFontSize =parseInt( window.getComputedStyle(txt,null).getPropertyValue("font-size"));
    var size = computedFontSize + 2 ;
    txt.style.fontSize = size +"px";

        
    }
  
   check.onchange = function(){
       
       if(check.checked ==true){
        txt.style.fontWeight = "bold";
        txt.style.color ="green";
        txt.style.textDecoration="underline";
        document.body.style.backgroundImage ="url(images/background.png)";
       } else {
        txt.style.fontWeight = "normal";
        txt.style.textDecoration="none";
        txt.style.color ="black";
        document.body.style.background ="none";
       }

    }
    btn2.onclick = function(){
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
    btn1.onclick = function(){
    
        var out =" ";
        const str2 = txt.value.split(" ");
        let temp =" ";
        for(let i=0; i<str2.length;i++){
            if(str2[i].length>=5){
                temp ="Malkovitch";
            }else {
                temp = str2[i];
            }
           out = out+ temp +" ";
        }
        txt.value = out;
    } 
})