alert("Welcome to Dragon Slayer! To play this game you have to create an account and a character. Follow the next steps to start")
const account = prompt("Name your account");
const password = prompt("Choose a password");
const email = prompt("Enter your e-mail");

alert("Your account has been created\n Account " + account + "\n E-mail " + email);

const race = prompt("Create you character! Choose your race:\n 1)Human 2)Elf 3)Dwarf");
const class0 = prompt("Choose your class:\n 1)Warrior 2)Wizzard");
const gender = prompt("What's your gender? 1)Male 2)Female 3)Other")

const race1 = "Human"
const race2 = "Elf"
const race3 = "Dwarf"
const class1 = "Warrior"
const class2 = "Wizzard"

let strenght = 0
let agility = 0
let aura = 0

//WARRIORS
//HUMAN STRENGHT - AGILITY - AURA
const hwstrenght = 15
const hwagility = 12
const hwaura = 12
//ELF STRENGHT
const ewstrenght = 14
const ewagility = 15
const ewaura = 13
//DWARF STRENGHT
const dwstrenght = 20
const dwagility = 10
const dwaura = 10

//WIZZARDS
//HUMAN STRENGHT - AGILITY - AURA
const hwizstrenght = 8
const hwizagility = 14
const hwizaura = 17
//ELF STRENGHT - AGILITY - AURA
const ewizstrenght = 7
const ewizagility = 15
const ewizaura = 20
//DWARF STRENGHT - AGILITY - AURA
const dwizstrenght = 10
const dwizagility = 12
const dwizaura = 15

let totalStrenght = 0
let totalAgility = 0
let totalAura = 0

if (race == 1 && class0 == 1) {
  totalStrenght += hwstrenght
  totalAgility += hwagility
  totalAura += hwaura
  alert('You are a ' + race1 + " " + class1 + ', your stats are\nStrenght ' + hwstrenght + '\nAgility ' + hwagility + '\nAura ' + hwaura)
}
else if (race == 1 && class0 == 2) {
  totalStrenght += hwizstrenght;
  totalAgility += hwizagility;
  totalAura += hwizaura;
  alert('You are a ' + race1 + " " + class2 + ', your stats are\nStrenght ' + hwizstrenght + '\nAgility ' + hwizagility + '\nAura ' + hwizaura);
}
else if (race == 2 && class0 == 1) {
  totalStrenght += ewstrenght
  totalAgility += ewagility
  totalAura += ewaura
  alert('You are a ' + race2 + " " + class1 + ', your stats are\nStrenght ' + ewstrenght + '\nAgility ' + ewagility + '\nAura ' + ewaura)
}
else if (race == 2 && class0 == 2) {
  totalStrenght += ewizstrenght
  totalAgility += ewizagility
  totalAura += ewizaura
  alert('You are a ' + race2 + " " + class2 + ', your stats are\nStrenght ' + ewizstrenght + '\nAgility ' + ewizagility + '\nAura ' + ewizaura)
}
else if (race == 3 && class0 == 1) {
  totalStrenght += dwstrenght
  totalAgility += dwagility
  totalAura += dwaura
  alert('You are a ' + race3 + " " + class1 + ', your stats are\nStrenght ' + dwstrenght + '\nAgility ' + dwagility + '\nAura ' + dwaura)
}
else if (race == 3 && class0 == 2) {
  totalStrenght += dwizstrenght
  totalAgility += dwizagility
  totalAura += dwizaura
  alert('You are a ' + race3 + " " + class2 + ', your stats are\nStrenght ' + dwizstrenght + '\nAgility ' + dwizagility + '\nAura ' + dwizaura)
}
else {
  alert("Not valid")
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

totalStrenght += strenght
totalAgility += agility
totalAura += aura

alert('Your character has\nStrenght: ' + totalStrenght + "\nAgility: " + totalAgility + "\nAura: " + totalAura + "\nYou are ready to start your journey!")

/* for (let i = 0; TotalPoints < MaxPoints; i++) {
  TotalPoints = addPointsToCharacter(MaxPoints, TotalPoints, messages[i])
}

function addPointsToCharacter(MaxPoints, points, message) {
  if (points < MaxPoints) {
    let AddMainPoints = Number(prompt(message));
    return points += AddMainPoints
  }
}

if (TotalMainPoints == 20) {
  console.log();
}  */