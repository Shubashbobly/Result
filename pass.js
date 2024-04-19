function result()
{
    var name = document.getElementById("name").value;
    var std=document.getElementById("stdid").value;
    var result = Math.random()*100;
    var res=document.getElementById("result");

//alert(name+"passed with🤦‍♀️🤦‍♀️🤦‍♀️"+result)
//res=res.innerHTML(name+"has passed"+result)

if(result==0 || result<=35)
{
    res.innerHTML=name+" single sheet of paper can not decide ur future " +result;
}
    else if(result==36 || result<=50){
        res.innerHTML=name+" second class " +result;
    
    }
    else if(result>=60|| result<=80){
        res.innerHTML=name+" First class " +result;
    }
    else if(result>=81 || result<=100){
        res.innerHTML=name+" Distinction " +result;
    }
}
let header=document.querySelector("h1");
    header.innerHTML="Ena mamey pass haaa👀";
header.style.backgroundColor="yellow"
header.style.color="blue"
header.style.cssText="color:red; font-size:75px; text-align:center";

