/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");
/* variabel för att spara bank */
let bank = 0;
let pupCost = 10;
let price = 10;
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += 1;
    var audio = new Audio('bofink.mp3');
    audio.play("");
    gameButton.textContent = Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "power of kvitter! " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        bank = bank * 10;
        gameButton.textContent = bank;
        powerUp.textContent = "Power of kvitter " + pupCost;
        bankElement.textContent = "Du köpte skånsk fågel!";
    } else
        bankElement.textContent = "Du har inte råd med skånsk fågel!";
});



powerUpsDiv.appendChild(powerUp);

/* skapa ett powerup-element */
let fagel = document.createElement("button");
fagel.textContent = "power of fagel ! " + price;
fagel.addEventListener('click', function() {
    if (bank >= price) {
        bank = bank - price;
        price = price * 2;
        bank = bank * 10;
        gameButton.textContent = bank;
        fagel.textContent = "Power of Fagel " + price;
        bankElement.textContent = "Du köpt en fagel!";
    } else
        bankElement.textContent = "Du har inte råd med fågel!";
});



powerUpsDiv.appendChild(fagel);


button.addEventListener('click', function(){

});


 