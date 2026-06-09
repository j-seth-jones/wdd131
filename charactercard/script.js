
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "snortleblat.webp",

    levelUp: function() {
        this.level = this.level + 1;
        this.health = this.health +20;
        renderCharacter();
    },
    
    attacked: function() {
        this.health = this.health - 20;
        renderCharacter();
        if (this.health <= 0) {
            alert("Snortleblat has died!");
            window.location.reload();
        }
    }
};

function renderCharacter() {
    const levelElement = document.querySelector("#level");
levelElement.textContent = character.level;

    const healthElement = document.querySelector("#health");
healthElement.textContent = character.health;
}
renderCharacter()

document.querySelector("#level-btn").addEventListener("click", function() {
    character.levelUp()
});
document.querySelector("#attack-btn").addEventListener("click", function() {
    character.attacked()
});