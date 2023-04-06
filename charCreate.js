//SECTIONS
let selection = document.getElementById("selection");
let gender = document.getElementById("gender");
let race = document.getElementById("race");
let profesion = document.getElementById("profesion");
let charForm = document.getElementById("charForm");

//BUTTONS
let newCharBtn = document.getElementById("newCharBtn");
let selCharBtn = document.getElementById("selCharBtn");
let back = document.getElementById("back");
let send = document.getElementById("sendBtn");


//CLICK EVENTS WHEN CREATING CHARACTERS
newCharBtn.onclick = function(){
    charForm.style.display = 'block';
}

let characters = []

const createChar = (ev)=>{
    ev.preventDefault();
    let character = {
        nickname: document.getElementById("charName").value,
        gender: document.getElementById("charGender").value,
        race: document.getElementById("charRace").value,
        class: document.getElementById("charClass").value,

    }
    characters.push(character);
    document.querySelector('form').reset();

    localStorage.setItem('MyCharacters', JSON.stringify(characters) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("sendBtn").addEventListener('click', createChar,);
});

sendBtn.click(function(){
    Swal.fire('Character created!')
})