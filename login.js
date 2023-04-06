let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    createBtn.innerHTML = "Enter";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    createBtn.innerHTML = "Create";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

}

let arr_users = [];

function user_register(){
    let user_name = document.getElementById("name")
    let user_email = document.getElementById("mail")
    let user_password = document.getElementById("password")

    //OBJETO DE USUARIOS//
    let user = {name:user_name.value,
        email:user_email.value,
        password:user_password.value,
    };

    arr_users.push(user);

    let arr_user_json = JSON.stringify(arr_users)

    localStorage.setItem("arr_users", arr_user_json)
    
}

function search_user (user){

    let user_name = document.getElementById("name").value;
    let user_email = document.getElementById("mail").value;
    let user_password = document.getElementById("password").value;
    
    return user_name == user.nombre && user_email == user.mail && user_password == user.password
}

function user_login(){
    
    let arr_registered = localStorage.getItem("arr_users");

    if( arr_registered != null){

        arr_registered = JSON.parse(arr_registered);

        console.log(arr_registered);
        let search_result = arr_registered.find(search_user)

        if( search_result != null){
            console.log("Se encontro: ", search_result)
        }
        else{
            console.log("No se encontro el usuario");
        }

    }
}


createBtn.addEventListener("click", user_register);
loginBtn.addEventListener("click", user_login);