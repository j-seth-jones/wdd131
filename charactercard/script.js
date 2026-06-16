const creatures = [
    {
        name: "Snortleblat",
        class: "Swamp Beast Diplomat",
        level: 1,
        health: 100,
        image: "snortleblat.webp"
    },
    {
        name: "Gloop",
        class: "Bog Wizard",
        level: 1,
        health: 120,
        image: "gloop.png"
    },
    {
        name: "Skitter-Bite",
        class: "Marsh Assassin",
        level: 1,
        health: 80,
        image: "skitter-bite.png"
    },
    {
        name: "Muckjaw",
        class: "Fen Berserker",
        level: 1,
        health: 140,
        image: "muckjaw.png"
    },
    {
        name: "Croakthorn",
        class: "Swamp Shaman",
        level: 1,
        health: 110,
        image: "croakthorn.png"
    },
    {
        name: "Sloggut",
        class: "Bog Guardian",
        level: 1,
        health: 160,
        image: "sloggut.png"
    }
];

let currentCreatureIndex = 0;

let currentCharacter = creatures[currentCreatureIndex];

function levelUp() {
    currentCharacter.level = currentCharacter.level + 1;
    currentCharacter.health = currentCharacter.health + 20;
    renderCharacter();
}

function attacked() {
    currentCharacter.health = currentCharacter.health - 20;
    renderCharacter();

    if (currentCharacter.health <= 0) {
        currentCreatureIndex = currentCreatureIndex + 1;

        if (currentCreatureIndex >= creatures.length) {
            alert("All creatures have fallen! Restarting the adventure...");
            currentCreatureIndex = 0;
            
            creatures[0].health = 100; creatures[0].level = 1; // Snortleblat
            creatures[1].health = 120; creatures[1].level = 1; // Gloop
            creatures[2].health = 140;  creatures[2].level = 1; // Skitter-Bite
            creatures[3].health = 160;  creatures[2].level = 1; // Muckjaw
            creatures[4].health = 180;  creatures[2].level = 1; // Croakthorn
            creatures[5].health = 200;  creatures[2].level = 1; // Sloggut
        } else {
            alert(`${currentCharacter.name} has died! A new creature approaches...`);
        }

        currentCharacter = creatures[currentCreatureIndex];
        renderCharacter();
    }
}

function renderCharacter() {
    const levelElement = document.querySelector("#level");
    levelElement.textContent = currentCharacter.level;
    
    const healthElement = document.querySelector("#health");
    healthElement.textContent = currentCharacter.health;
    
    const nameElement = document.querySelector(".name");
    nameElement.textContent = currentCharacter.name;
    
    const classElement = document.querySelector("#character-class");
    classElement.textContent = currentCharacter.class; 
    
    const imageElement = document.querySelector(".image");
    imageElement.src = currentCharacter.image; 
}

renderCharacter();

document.querySelector("#level-btn").addEventListener("click", function() {
    levelUp();
});

document.querySelector("#attack-btn").addEventListener("click", function() {
    attacked();
});