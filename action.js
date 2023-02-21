// javascript code goes here

 let a=function(){fetch("https://randomuser.me/api/")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    document.querySelector(".first").innerHTML = data.results[0].name.first;
    document.querySelector(".last").innerHTML = data.results[0].name.last;
    let sorce = data.results[0].picture.large;
    document.querySelector(".img").setAttribute("src", sorce);

    let age=data.results[0].dob.age;
    let email=data.results[0].email;
    let phone=data.results[0].phone;

    document.querySelector(".age").addEventListener("click",()=>{
        document.querySelector(".value").innerHTML="";
        document.querySelector(".value").innerHTML=age;
    });

    document.querySelector(".phone").addEventListener("click",()=>{
        document.querySelector(".value").innerHTML="";
        document.querySelector(".value").innerHTML=phone;
    });

    document.querySelector(".email").addEventListener("click",()=>{
        document.querySelector(".value").innerHTML="";
        document.querySelector(".value").innerHTML=email;
    });

    

  })};
  a();
  document.querySelector(".user").addEventListener("click",()=>{
    a();
    document.querySelector(".value").innerHTML="";

})
