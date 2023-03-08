alert("Welcome to Dragon Slayer! To play this game you have to create an account and a character. Follow the next steps to start")
const account = prompt("Name your account");
const password = prompt("Choose a password");
const email = prompt("Enter your e-mail");

alert("Your account has been created\n Account " + account + "\n E-mail " + email);

const characterPet = [
  {nombre: 'cougar',
  nombre: 'wolf',
  nombre: 'bird',
  nombre: 'rat',
  nombre: 'frog',
  nombre: 'horse',
  nombre: 'dog'}
]

const ChoosePet = prompt("choose a pet for your journey!\n0) cougar 1) wolf 2) bird 3) rat 4) frog 5) horse 6) dog")

const petResult = characterPet.find((el) => el.nombre === "cougar")
const resultado = characterPet.find((el) => el.nombre === "rat")

console.log(petResult)

/* function option1(message) {
  return prompt(message);
}

const nickName = option1("Whats your Nickname?")
const race = option1("Create you character! Choose your race:\n 1)Human 2)Elf 3)Dwarf");
const class0 = option1("Choose your class:\n 1)Warrior 2)Wizard");
const gender = option1("Choose your gender:\n 1)Male 2)Female 3)Other");
*/

const characterRace = [
  "human", "elf", "dwarf",
];

const characterClass = [
  "warrior", "wizzard",
];

const characterGender =[
  "male", "female", "other",
];


const strenghtDefault = {
  humanWarrior: 15,
  humanWizzard: 8,
  elfWarrior: 14,
  elfWizzard: 7,
  dwarfWarrior: 20,
  dwarfWizzard: 10,
}

const agilityDefault = {
  humanWarrior: 12,
  humanWizzard: 14,
  elfWarrior: 15,
  elfWizzard: 15,
  dwarfWarrior: 10,
  dwarfWizzard: 12,
}

const auraDefault = {
  humanWarrior: 12,
  humanWizzard: 17,
  elfWarrior: 13,
  elfWizzard: 20,
  dwarfWarrior: 10,
  dwarfWizzard: 15,
}


const name = document.getElementById("characterNickName").value
const race = document.getElementById("characterRace").value
const class1 = document.getElementById("characterClass").value
const gender = document.getElementById("characterGender").value



let characterForm =
document.getElementById("characterForm");
characterForm.addEventListener("submit", createNewCharacter);

function createNewCharacter(e) {
  e.preventDefault ();
  let mainCharacter = new character( document.getElementById("characterNickName").value, document.getElementById("characterRace").value, document.getElementById("characterClass").value, document.getElementById("characterGender").value)
  console.log("You'r Character has been created!")
}

class character {
  constructor(name, race, class1, gender, strenght, agility, aura, image) {
    this.name = name;
    this.race = race;
    this.class1 = class1;
    this.gender = gender;
    this.strenght = strenghtDefault[race + class1];
    this.agility = agilityDefault[race + class1];
    this.aura = auraDefault[race + class1];
    this.image = race + class1 + gender + ".png";
  }
}


alert("You have 20 points to add to your stats! Those are, Strenght - Agility - Aura");

const MaxPoints = 20;
let TotalPoints = 0;

do {
  strenght = Number(prompt( "How many points would you like to add to strenght?" ))
  TotalPoints += strenght
  agility = Number(prompt( "How many points would you like to add to agility?" ))
  TotalPoints += agility
  aura = Number(prompt( "How many points would you like to add to aura?" ))
  TotalPoints += aura
  if (TotalPoints != MaxPoints) {
    TotalPoints = 0;
      alert( "Re Enter the stats to sum 20!" );
  }
} while (TotalPoints != MaxPoints) 

mainCharacter.strenght += strenght
mainCharacter.agility += agility
mainCharacter.aura += aura

function readyJourney() {
  alert('Your character has\nStrenght: ' + totalStrenght + "\nAgility: " + totalAgility + "\nAura: " + totalAura + "\nYou are ready to start your journey!");
}

let readyJourney1 = document.getElementById("characterCreate");

readyJourney1.addEventListener(click, readyJourney );

/* if (race == 1 && class0 == 1) {
  totalStrenght += humanWarrior.strenght
  totalAgility += humanWarrior.agility
  totalAura += humanWarrior.aura
  alert('You are a ' + race1 + " " + class1 + ', your stats are\nStrenght ' + humanWarrior.strenght + '\nAgility ' + humanWarrior.agility + '\nAura ' + humanWarrior.aura)
}
else if (race == 1 && class0 == 2) {
  totalStrenght += humanWizzard.strenght
  totalAgility += humanWizzard.agility
  totalAura += humanWizzard.aura
  alert('You are a ' + race1 + " " + class2 + ', your stats are\nStrenght ' + humanWizzard.strenght + '\nAgility ' + humanWizzard.agility + '\nAura ' + humanWizzard.aura);
}
else if (race == 2 && class0 == 1) {
  totalStrenght += elfWarrior.strenght
  totalAgility += elfWarrior.agility
  totalAura += elfWarrior.aura
  alert('You are a ' + race2 + " " + class1 + ', your stats are\nStrenght ' + elfWarrior.strenght + '\nAgility ' + elfWarrior.agility + '\nAura ' + elfWarrior.aura)
}
else if (race == 2 && class0 == 2) {
  totalStrenght += elfWizzard.strenght
  totalAgility += elfWizzard.agility
  totalAura += elfWizzard.aura
  alert('You are a ' + race2 + " " + class2 + ', your stats are\nStrenght ' + elfWizzard.strenght + '\nAgility ' + elfWizzard.agility + '\nAura ' + elfWizzard.aura)
}
else if (race == 3 && class0 == 1) {
  totalStrenght += dwarfWarrior.strenght
  totalAgility += dwarfWarrior.agility
  totalAura += dwarfWarrior.aura
  alert('You are a ' + race3 + " " + class1 + ', your stats are\nStrenght ' + dwarfWarrior.strenght + '\nAgility ' + dwarfWarrior.agility + '\nAura ' + dwarfWarrior.aura)
}
else if (race == 3 && class0 == 2) {
  totalStrenght += dwarfWizzard.strenght
  totalAgility += dwarfWizzard.agility
  totalAura += dwarfWizzard.aura
  alert('You are a ' + race3 + " " + class2 + ', your stats are\nStrenght ' + dwarfWizzard.strenght + '\nAgility ' + dwarfWizzard.agility + '\nAura ' + dwarfWizzard.aura)
}
else {
  console.log(option1())
} */



//FORM
