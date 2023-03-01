alert("Welcome to Dragon Slayer! To play this game you have to create an account and a character. Follow the next steps to start")
const account = prompt("Name your account");
const password = prompt("Choose a password");
const email = prompt("Enter your e-mail");

alert("Your account has been created\n Account " + account + "\n E-mail " + email);



function option1(message) {
  return prompt(message);
}

const nickName = option1("Whats your Nickname?")
const race = option1("Create you character! Choose your race:\n 1)Human 2)Elf 3)Dwarf");
const class0 = option1("Choose your class:\n 1)Warrior 2)Wizard");
const gender = option1("Choose your gender:\n 1)Male 2)Female 3)Other");


const race1 = "Human"
const race2 = "Elf"
const race3 = "Dwarf"
const class1 = "Warrior"
const class2 = "Wizzard"

let strenght = 0
let agility = 0
let aura = 0

//WARRIORS////////////////////////////////////////////////////////////////////////////////////////

//HUMAN WARRIOR
const humanWarrior = {
strenght:  15,
agility:  12,
aura:  12,

}
//ELF WARRIOR
const elfWarrior = {
strenght:  14,
agility:  15,
aura:  13,

}

//DWARF WARRIOR
const dwarfWarrior = {
strenght:  20,
agility:  10,
aura:  10,
}



//WIZZARDS////////////////////////////////////////////////////////////////////////////////////////////////
//HUMAN WIZZARD
const humanWizzard = {
strenght:  8,
agility:  14,
aura:  17,
}

//ELF WIZZARD
const elfWizzard = {
strenght:  7,
agility:  15,
aura:  20,
}
//DWARF WIZZARD

const dwarfWizzard = {
  strenght:  10,
  agility:  12,
  aura:  15,
}

const mainCharacter = {
  name: nickName,
  gender: gender,
  strenght: 0,
  agility: 0,
  aura: 0,

}

let totalStrenght = 0
let totalAgility = 0
let totalAura = 0

if (race == 1 && class0 == 1) {
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

alert('Your character has\nStrenght: ' + totalStrenght + "\nAgility: " + totalAgility + "\nAura: " + totalAura + "\nYou are ready to start your journey!")


//FORM




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