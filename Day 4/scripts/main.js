var btnLogin = document.getElementById('btnLogin');
function validate(e)
{ 
    var uname = document.forms["loginForm"]["userName"].value;
    var pass = document.forms["loginForm"]["passWord"].value;
    if(uname.length == 0 || pass.length == 0){
        e.preventDefault();
    }
    
}

var elements = document.querySelectorAll('#loginForm input');
        elements.forEach(e=>{
            e.addEventListener('keyup', function(){
                var uname = document.forms["loginForm"]["userName"];
                var pass = document.forms["loginForm"]["passWord"];
                if(uname.value == "" || pass.value == ""){
                    btnLogin.setAttribute('disabled', true);
                }
                else
                {
                    btnLogin.removeAttribute('disabled');
                }
            })
        })