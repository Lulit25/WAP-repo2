document.addEventListener("DOMContentLoaded",function(event){
    var btn = document.getElementById("btn");

    btn.onclick= function(){
        var name = document.getElementById("name").value;
        var deposit = document.getElementById("deposit").value;
        var text = document.getElementById("text");
        var accountInfoList =[];
        var acc;
    (function(){
    function createAccount(n, d){
       
        return {
            n,
            d
        }
        //alert(account.print());
    }
    acc = createAccount(name, deposit);
    
})();
    accountInfoList.push(acc);

     for(let i=0; i<accountInfoList.length; i++){
        text.value += "Name : "+ accountInfoList[i].n + "\n"+"Deposit : "+accountInfoList[i].d +"\n";
    }
    
    }
})


