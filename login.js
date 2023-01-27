
document.getElementById("btn").addEventListener("click",function (e)
{
    e.preventDefault()
    var uname = document.getElementById("uname").value;
    var psw= document.getElementById("psw").value;
    console.log(uname);
    console.log(psw);
    
    if((uname === 'admin') &&(psw === 'admin'))
    {
        console.log("hi")
        window.location.href = "./interface1.html";

    }

})

