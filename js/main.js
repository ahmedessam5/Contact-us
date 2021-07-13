var myinput=document.querySelectorAll("input");
var mybtn=document.getElementById("btn");
var myadd=document.getElementById("add");
var myalert=document.getElementById("alertname");
var myalertnum=document.getElementById("alertnum");
var myalertmail=document.getElementById("alertmail");
var myname=myinput[0];
var myphone=myinput[1] ;
var myemail=myinput[2];
var myarray=[];


mybtn.addEventListener("click",function(){
    var myname=myinput[0].value;
    var myphone=myinput[1].value;
    var myemail=myinput[2].value;
    var myobject={name:myname,phone:myphone,email:myemail};
    myarray.push(myobject);
    localStorage.setItem("mydata",JSON.stringify(myarray));
 
    var local=localStorage.getItem("mydata");
    var mydata2= JSON.parse(local);
    var result="";
    for (var i=0;i<mydata2.length;i++)
    {
     result=result+   "<tr> <th>"+mydata2[i].name+"</th> <th>"+mydata2[i].phone +"</th> <th>"+mydata2[i].email+"</th> </tr>";
    }
    myadd.innerHTML=result;


    clean();
})

function clean(){
myinput[0].value="";
myinput[1].value="";
myinput[2].value="";
}




myname.addEventListener("blur",function(){
var mynamedata=myinput[0].value;
   var regex=/^[a-zA-Z]+\s[a-zA-Z]+$/
   if(regex.test(mynamedata)){
    myalert.classList.add("display");
   }else{
    myalert.classList.remove("display");
   }

})

myphone.addEventListener("blur",function(){
    var myphonedata=myinput[1].value;
    var Exphone=/^(002)?(011|012|010|015)[0-9]{8}$/
    if(Exphone.test(myphonedata)){
        myalertnum.classList.add("display");
    }else{
        myalertnum.classList.remove("display");
    }
})

myemail.addEventListener("blur",function(){
    var mymaildata=myinput[2].value;
    var Exmail=/^[a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z]{2,6}$/;
    if(Exmail.test(mymaildata)){
        myalertmail.classList.add("display");
    }else{
        myalertmail.classList.remove("display");
    }
})




// var myinput=document.querySelectorAll("input");
// var mybtn=document.getElementById("btn");
// var myadd=document.getElementById("add");
// var myarray=[];


// mybtn.addEventListener("click",function(){
//     var myname=myinput[0].value;
//     var myphone=myinput[1].value;
//     var myemail=myinput[2].value;
//     var myobject={name:myname,phone:myphone,email:myemail};
//     myarray.push(myobject);
//     localStorage.setItem("mydata",JSON.stringify(myarray));
 
//     var local=localStorage.getItem("mydata");
//     var mydata2= JSON.parse(local);
//     var result="";
//     for (var i=0;i<mydata2.length;i++)
//     {
//      result=result+   "<tr> <th>"+mydata2[i].name+"</th> <th>"+mydata2[i].phone +"</th> <th>"+mydata2[i].email+"</th> </tr>";
//     }
//     myadd.innerHTML=result;


//     clean();
// })


// function clean(){
// myinput[0].value="";
// myinput[1].value="";
// myinput[2].value="";
// }