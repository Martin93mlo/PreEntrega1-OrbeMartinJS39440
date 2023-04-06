let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");
let sendBtn = document.getElementById("sendBtn");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    createBtn.innerHTML = "Enter";
    createBtn.removeEventListener("click", user_register);
    createBtn.addEventListener("click", user_login);
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    createBtn.innerHTML = "Create";
    createBtn.removeEventListener("click", user_login);
    createBtn.addEventListener("click", user_register);
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

}

//sign up----------------------------------------------------------------

let arr_users = [];

const userRegistration = (ev)=>{
    ev.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        password: document.getElementById("password"),
    }
    arr_users.push(user);
    document.querySelector('form').reset();

    localStorage.setItem('arrayUsers', JSON.stringify(arr_users) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("createBtn").addEventListener('click', userRegistration)
})

/* function user_register(){
    let user_name = document.getElementById("name")
    let user_email = document.getElementById("mail")
    let user_password = document.getElementById("password")

    arr_users = localStorage.getItem("arr_users")
    arr_users = JSON.parse(arr_users);

    
    let user = {name:user_name.value,
        email:user_email.value,
        password:user_password.value,
    };

    arr_users.push(user);

    let arr_user_json = JSON.stringify(arr_users)

    localStorage.setItem("arr_users", arr_user_json)
    
} */

//sig in-------------------------------------------------------

function search_user (user){

    //let user_name = document.getElementById("name").value;
    let user_email = document.getElementById("mail").value;
    let user_password = document.getElementById("password").value;
    
    return /* user_name == user.nombre &&  */user_email == user.email && user_password == user.password
}


function user_login(){
    
    let arr_registered = localStorage.getItem("arr_users");

    if( arr_registered != null){

        arr_registered = JSON.parse(arr_registered);

        console.log(arr_registered);
        let search_result = null;
        for (let i = 0; i < arr_registered.length; i++) {
            console.log("aserfs", search_user(arr_registered[i]))
            console.log("user", arr_registered[i])
            if (search_user(arr_registered[i])) search_result = arr_registered[i];
            if (search_result) break;
        }

        if( search_result != null){
            console.log("Se encontro: ", search_result)
            window.location.href = "characters.html"
        }
        else{
            console.log("No se encontro el usuario");
        }

    }
}


createBtn.addEventListener("click", user_register);
//loginBtn.addEventListener("click", user_login);