// Tavern folks //
const adventurers = [
    {
        "name": "Valeros Stormwind",
        "class": "Fighter",
        "level": 1,
        "health": 100,
        "image": "images/valeros_fighter.webp"
    },
    {
        "name": "Lyra Whisperwind",
        "class": "Rogue",
        "level": 1,
        "health": 120,
        "image": "images/lyra_rogue.webp"
    },
    {
        "name": "Eldrin the Wise",
        "class": "Wizard",
        "level": 1,
        "health": 80,
        "image": "images/eldrin_wizard.webp"
    },
    {
        "name": "Thorgar Ironbreaker",
        "class": "Paladin",
        "level": 1,
        "health": 140,
        "image": "images/thorgar_paladin.webp"
    },
    {
        "name": "Seraphina Soulweaver",
        "class": "Cleric",
        "level": 1,
        "health": 160,
        "image": "images/seraphina_cleric.webp"
    },
    {
        "name": "Korrak Bloodrage",
        "class": "Barbarian",
        "level": 1,
        "health": 200,
        "image": "images/korrak_barbarian.webp"
    }
];

const bosses = [
    {
        "name": "Billy the Lich",
        "creatureType": "Lich",
        "health": 1000,
        "image": "images/Boss-Lich.webp"
    },
    {
        "name": "Grolnok",
        "creatureType": "Giant Frog Monster",
        "health": 1000,
        "image": "images/Boss-Frog.webp"
    },
    {
        "name": "I Have No Idea WTF  I'm Looking At But It Hurts",
        "creatureType": "Apparition",
        "health": 1000,
        "image": "images/Boss-Apparition.webp"
    }
]

let currentAdventurerIndex = 0;
let adventurerLevel = 1;
let currentAdventurer = adventurers[currentAdventurerIndex];
let currentBossIndex = 0;
let currentBoss = null;

// Damage array
const damageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// User Health
let currentUserHealth = 200

// Ally Inventory
let AllyInventory = [];

// Attack function
function attacked() {
    // Give damage to Adventurer
    let randomDamageIndex = Math.floor(Math.random() * damageIndex.length);
    let damageGiven = damageIndex[randomDamageIndex];
    AllyInventory.forEach(ally => damageGiven += damageIndex[Math.floor(Math.random()*damageIndex.length)])
    if (currentBoss == null) {
        currentAdventurer.health = currentAdventurer.health - damageGiven;
        renderAdventurer();

        if (currentAdventurer.health <= 0) {
            currentAdventurer.health = 0;
            renderAdventurer();
            adventurerLevel += 1;
            currentAdventurerIndex = currentAdventurerIndex + 1;

            if (currentAdventurerIndex >= adventurers.length) {
                alert("You feel an ominous presence approach you.");
                currentBossIndex = Math.floor(Math.random() * bosses.length);
                currentBoss = bosses[currentBossIndex];
                renderBoss();
            } else {
                alert(`${currentAdventurer.name} has died! Someone new approaches...`);
                currentAdventurer = adventurers[currentAdventurerIndex];
                renderAdventurer();
            }


        } else {
            let randomDamageIndex = Math.floor(Math.random() * damageIndex.length);
            let damageTaken = damageIndex[randomDamageIndex];
            currentUserHealth = currentUserHealth - damageTaken;
            renderPlayer();

            if (currentUserHealth <= 0) {
                alert("You have died. Try again");
                currentUserHealth = 200;
                AllyInventory = [];
                currentAdventurerIndex = 0;

                adventurers[0].health = 100;
                adventurers[1].health = 120;
                adventurers[2].health = 140;
                adventurers[3].health = 160;
                adventurers[4].health = 180;
                adventurers[5].health = 200;

                adventurers.sort((a, b) => Math.random() - 0.5);
                currentAdventurer = adventurers[currentAdventurerIndex];
                renderAdventurer();
                renderPlayer();
                potions = 4;
                renderPotions();
            }
        }
    } else {
        currentBoss.health = currentBoss.health - damageGiven;
        renderBoss();
        if (currentBoss.health <= 0) {
            currentBoss.health = 0;
            renderBoss();
            alert("You win! Congratulations!");
            window.location.href = window.location.href.replace('dnd-brawl.html','dnd-start.html');

        } else {
            let randomDamageIndex = Math.floor(Math.random() * damageIndex.length);
            let damageTaken = damageIndex[randomDamageIndex] * 2;
            
            if (AllyInventory.length > 0) {
                AllyInventory[0].health -= damageTaken;
                if (AllyInventory[0].health <= 0) {
                    AllyInventory.shift();
                }
                renderAlly();
            } else {
                currentUserHealth = currentUserHealth - damageTaken;
                renderPlayer();
            }


            if (currentUserHealth <= 0) {
                currentUserHealth = 0;
                alert("You have died. Try again");
                window.location.href = window.location.href.replace('dnd-brawl.html','dnd-start.html');
            }
        }
    }
};

// Recruitment Function
function attemptRecruit() {
    if (Math.random() >= 0.5) {

        alert("Recruitment Successful! A new figure approaches you...");
        AllyInventory.push(currentAdventurer);
        currentAdventurerIndex = currentAdventurerIndex + 1;
        renderAlly();
    }
    else {
        alert("Recruitment Unsuccessful");
        currentAdventurerIndex = currentAdventurerIndex + 1;
    }

    if (currentAdventurerIndex >= adventurers.length) {
        alert("You feel an ominous presence approach you.");
                currentBossIndex = Math.floor(Math.random() * bosses.length);
                currentBoss = bosses[currentBossIndex];
                renderBoss();
    } else {
        currentAdventurer = adventurers[currentAdventurerIndex];
        renderAdventurer();
    }

    console.log(AllyInventory)
};

let potions = 4;
function drinkPotion() {
    if (potions > 0) {
        potions -= 1;
        currentUserHealth += 50;
        renderPlayer();
    } else {
        alert("Umm... You're out of potions...")
    }
    renderPotions();
}

// User updates 
function renderPlayer() {
    const userHealthElement = document.querySelector("#userHealth");
    userHealthElement.textContent = currentUserHealth
}

// Tavern Adventurer updates
function renderAdventurer() {

    currentAdventurer.level = adventurerLevel;

    const levelElement = document.querySelector("#level");
    levelElement.textContent = currentAdventurer.level;
    
    const healthElement = document.querySelector("#health");
    healthElement.textContent = currentAdventurer.health;
    
    const nameElement = document.querySelector(".name");
    nameElement.textContent = currentAdventurer.name;
    
    const classElement = document.querySelector("#adventurer-class");
    classElement.textContent = currentAdventurer.class; 
    
    const imageElement = document.querySelector(".image");
    imageElement.src = currentAdventurer.image; 
};

function renderAlly() {
    const div = document.querySelector('.allies');
    div.innerHTML = ""
    AllyInventory.forEach(ally => {
        const allyCard = document.createElement('div');
        allyCard.classList.add("miniCard");
        allyCard.innerHTML = `<div class="stats">
            <h3 class="stat3">Health: <span id="health"> ${ally.health}</span></h3>
        </div>
        <img class="image" src="${ally.image}" alt="Character Image" width="400" height="400">`
        div.appendChild(allyCard);
    });
    
}

function renderPotions() {
    document.getElementById("potionCount").innerHTML = ""
    for (let i = 0; i < potions; i++) {
        const potionImg = document.createElement("img");
        potionImg.src = "images/health-potion-img.jpg";
        document.getElementById("potionCount").appendChild(potionImg);
    }
}

function renderBoss() {
    const levelElement = document.querySelector(".stat2");
    levelElement.innerHTML = "";
    
    const healthElement = document.querySelector("#health");
    healthElement.textContent = currentBoss.health;
    
    const nameElement = document.querySelector(".name");
    nameElement.textContent = currentBoss.name;
    
    const classElement = document.querySelector(".stat1");
    classElement.innerHTML = `Creature Type: <span id="adventurer-class"> ${currentBoss.creatureType}</span>`; 
    
    const imageElement = document.querySelector(".image");
    imageElement.src = currentBoss.image; 

    const recruitBtnElement = document.getElementById("recruit-btn");
    recruitBtnElement.style.visibility = "hidden";
};

// Onload stuff
renderPotions();
adventurers.sort((a, b) => Math.random() - 0.5);
currentAdventurer = adventurers[currentAdventurerIndex]
renderAdventurer();

// Buttons 
document.querySelector("#attack-btn").addEventListener("click", function() {
    attacked();
});

document.querySelector("#recruit-btn").addEventListener("click", function() {
    attemptRecruit();
});

document.querySelector("#potion-btn").addEventListener("click", function() {
    drinkPotion();
});

