var userdata={}
function change(name,value){
    console.log('data',userdata);
    userdata={
        ...userdata,
        [name]:value
       
    }  

}
//for button
var submit=document.getElementById('logbtn');
submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(submit);
   fetch('https://conduit.productionready.io/api/users/login',{
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({user:userdata})
   })
   .then(response=>response.json())
   .then(data=>console.log(data))
})
