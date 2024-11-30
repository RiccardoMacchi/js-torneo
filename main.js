let fighters = []
let winners = []

const fighterNames = [
    "ShadowStrike",
    "IronFist",
    "BlazePhoenix",
    "StormBreaker",
    "NightWolf",
    "ThunderClaw",
    "SteelViper",
    "FuryDragon",
    "BladeRunner",
    "CrimsonRaven",
    "GhostReaper",
    "VenomSpiral",
    "RogueFalcon",
    "SavageLion",
    "DoomHammer",
    "SilentArrow",
    "BloodHawk",
    "TitanCrusher",
    "FireClaw",
    "EclipseWarrior"
];

const fighterWeapons = [
    "Shadow Blade",
    "Iron Claws",
    "Phoenix Spear",
    "Storm Halberd",
    "Night Dagger",
    "Thunder Hammer",
    "Steel Katana",
    "Dragon Fang",
    "Razor Edge",
    "Crimson Scythe",
    "Ghost Mace",
    "Venom Whip",
    "Falcon Talons",
    "Lion Fang",
    "Doom Axe",
    "Silent Bow",
    "Blood Crescent",
    "Titan Gauntlets",
    "Firebrand Sword",
    "Eclipse Staff",
    "Fury Chakrams",
    "Bone Crusher",
    "Lightning Rapier",
    "Icebreaker Hammer",
    "Inferno Blade"
];



let numberFighter = 25

// Creiamo i combattenti e aggiungo potere, nome e arma
for (i = 0; i < numberFighter; i++) {
    let fighter = {
        name: '',
        power: 0,
        weapon: ''
    }

    // Random power da 0 a 100
    randomPower = Math.floor(Math.random() * 100)
    fighter.power = randomPower
    // Random name dall'array fighterNames
    randomName = Math.floor(Math.random() * fighterNames.length)
    fighter.name = fighterNames[randomName]
    // rimuovo il nome dall'array
    fighterNames.splice(randomName, 1)
    // Random arma dall'array fighterWeapons
    randomWeapon = Math.floor(Math.random() * fighterWeapons.length)
    fighter.weapon = fighterWeapons[randomWeapon]
    // rimuovo l'arma dall'array
    fighterWeapons.splice(randomWeapon, 1)
    fighters.push(fighter)
}
console.log(fighterWeapons)
console.log('selezione di tutti i fighter', fighters)

for (i = 0; i < fighters.length; i++) {
    randomTraing = Math.floor(Math.random() * 100)
    fighters[i].power = fighters[i].power * randomTraing
}

console.log('fighter dopo allenamento', fighters)

for (i = 0; i < fighters.length; i++) {
    console.log(fighters[i].power)
    if (fighters[i].power <= 2000) {
        fighters.splice(i, 1)
        i--
    }
}

// fighters = fighters.filter(fight => fight.power >= 2000)

if (fighters.length % 2 !== 0) {
    let robot = {
        name: 'Robot',
        power: 4000,
        weapon: 'Chips'
    }
    fighters.push(robot)
}

console.log('maggiori di potenza 2000', fighters)


while (fighters.length) {
    if (fighters[0].power >= fighters[1].power) {
        winners.push(fighters[0])
    } else {
        winners.push(fighters[1])
    }

    fighters.splice(0, 2)
}

console.log('lista vincitori', winners)

// bonus

// while (fighters.length !== 1) {
//     if (fighters[0].power >= fighters[1].power) {
//         fighters.push(fighters[0])
//     } else {
//         fighters.push(fighters[1])
//     }

//     fighters.splice(0, 2)
// }

console.log('lista vincitore', fighters)


let podio = []

while (podio.length !== 3) {
    let bigger = winners[0]

    for (i = 0; i < winners.length; i++) {
        if (winners[i].power >= bigger.power) {
            bigger = winners[i]
        }
    }

    podio.push(bigger)
    indexToRemove = winners.indexOf(bigger)
    winners.splice(indexToRemove, 1)

    console.log('podio', podio)
}

// con sort
// winners.sort((a, b) => b.power - a.power);

// let podioSort = winners.slice(0, 3);




