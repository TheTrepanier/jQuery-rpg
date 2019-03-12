// Partner Objects
var electricPartner = {
    levelOne: {
        name: "Pichu",
        hp: 150,
        attack: 9,
        counterPower: 19,
        sprite: "assets/images/1/1/1.png"
    },
    levelTwo: {
        name: "Pikachu",
        hp: 180,
        attack: 12,
        counterPower: 22,
        sprite: "assets/images/1/1/2.png"
    },
    levelThree: {
        name: "Raichu",
        hp: 230,
        attack: 19,
        counterPower: 29,
        sprite: "assets/images/1/1/3.png"
    }
};
var grassPartner = {
    levelOne: {
        name: "Bulbasaur",
        hp: 200,
        attack: 13,
        counterPower: 21,
        sprite: "assets/images/1/2/1.png"
    },
    levelTwo: {
        name: "Ivysaur",
        hp: 230,
        attack: 14,
        counterPower: 24,
        sprite: "assets/images/1/2/2.png"
    },
    levelThree: {
        name: "Venusaur",
        hp: 270,
        attack: 18,
        counterPower: 28,
        sprite: "assets/images/1/2/3.png"
    }
};
var firePartner = {
    levelOne: {
        name: "Charmander",
        hp: 188,
        attack: 11,
        counterPower: 22,
        sprite: "assets/images/1/3/1.png"
    },
    levelTwo: {
        name: "Charmeleon",
        hp: 226,
        attack: 14,
        counterPower: 24,
        sprite: "assets/images/1/3/2.png"
    },
    levelThree: {
        name: "Charizard",
        hp: 266,
        attack: 19,
        counterPower: 29,
        sprite: "assets/images/1/3/3.png"
    }
};
var waterPartner = {
    levelOne: {
        name: "Squirtle",
        hp: 198,
        attack: 11,
        counterPower: 21,
        sprite: "assets/images/1/4/1.png"
    },
    levelTwo: {
        name: "Wartortle",
        hp: 228,
        attack: 14,
        counterPower: 24,
        sprite: "assets/images/1/4/2.png"
    },
    levelThree: {
        name: "Blastoise",
        hp: 268,
        attack: 18,
        counterPower: 29,
        sprite: "assets/images/1/4/3.png"
    }
};
var pokemon = [electricPartner, grassPartner, firePartner, waterPartner]

// Visual Elements
var masthead = $("<h1>").text("Choose Your Partner!").addClass("text-center my-4").attr("id","masthead");
var displayRow = $("<div>").addClass("row");
var attackButton = $("<button>").addClass("btn btn-danger").attr("id", "attack-button").text("Attack!");


var partnerCardWrapper = $("<div>");
var partnerCard = $("<div>").addClass("card");
var partnerImage = $("<img>").addClass("card-img-top");
var partnerCardBody = $("<div>").addClass("card-body");
var partnerCardBodyTitle = $("<h4>").addClass("card-title text-center");
var partnerCardBodyText = $("<p>").addClass("card-text, text-center").attr("id", "player-hp-box");

var currentOpponentWrapper = $("<div>");
var currentOpponentCard = $("<div>").addClass("card");
var currentOpponentImage = $("<img>").addClass("card-img-top");
var currentOpponentCardBody = $("<div>").addClass("card-body");
var currentOpponentCardBodyTitle = $("<h4>").addClass("card-title text-center");
var currentOpponentCardBodyText = $("<p>").addClass("card-text, text-center").attr("id", "current-opponent-hp");

var opponentsCardColumns = $("<div>").addClass("card-columns col-9").attr("id", "opponentsCardColumns");

// Game Elements
var playerPartner;
var currentOpponent;

function playerAttacksRoundOne() {
    currentOpponent.levelOne.hp -= playerPartner.levelOne.attack;
    playerPartner.levelOne.attack += playerPartner.levelOne.attack;
    playerPartner.levelOne.hp -= currentOpponent.levelOne.counterPower;

    $("#current-opponent-hp").text("HP: " + currentOpponent.levelOne.hp);
    $("#player-hp-box").text("HP: " + playerPartner.levelOne.hp);

    // make if statement to check if hp of either pokemon is <= 0
    // if player wins clear 
}

function gameStart() {
    $("#root").append(masthead);
    
    $("#root").append("<div id='starting-row' class='row'></div>");

    for (let index = 0; index < pokemon.length; index++) {
        var character = pokemon[index];
        var characterCard = $("<div>");
        var characterImage = $("<img>");
        var charactedCardBody = $("<div>");

        characterCard.addClass("card col-md-3 px-4 character-card");
        characterCard.attr("data-partner", index)

        characterImage.attr("src", character.levelOne.sprite);
        characterImage.addClass("card-img-top");

        charactedCardBody.addClass("card-body text-center");
        charactedCardBody.text(character.levelOne.name).addClass("h4");

        characterCard.append(characterImage);
        characterCard.append(charactedCardBody);

        $("#starting-row").append(characterCard);
    }
}

function partnerHasBeenSelected() {
    $("#root").empty();
    
    masthead.text("Choose Your Opponent");
    $("#root").append(masthead);
    displayRow.attr("id","battle-row");
    $("#root").append(displayRow);

    partnerImage.attr("src", playerPartner.levelOne.sprite);
    partnerCardBodyTitle.text(playerPartner.levelOne.name);
    partnerCardBodyText.text("HP: " + playerPartner.levelOne.hp)
    partnerCardBody.append(partnerCardBodyTitle, partnerCardBodyText);
    partnerCard.append(partnerImage, partnerCardBody);
    partnerCardWrapper.addClass("col-3").append(partnerCard);

    for (let index = 0; index < pokemon.length; index++) {
        var opponent = pokemon[index];
        var opponentCard = $("<div>").addClass("card opponent-card mx-auto").css("width", "12rem").attr("data-opponent", index);
        var opponentImage = $("<img>").addClass("card-img-top");
        var opponentCardBody = $("<div>").addClass("card-body");
        var opponentCardBodyTitle = $("<h4>").addClass("card-title text-center");
        var opponentCardBodyText = $("<p>").addClass("card-text text-center");

        opponentImage.attr("src", opponent.levelOne.sprite);
        opponentCardBodyTitle.text(opponent.levelOne.name);
        opponentCardBodyText.text("HP: " + opponent.levelOne.hp);
        opponentCardBody.append(opponentCardBodyTitle, opponentCardBodyText);
        opponentCard.append(opponentImage, opponentCardBody);

        opponentsCardColumns.append(opponentCard);
    }

    $("#battle-row").append(partnerCardWrapper, opponentsCardColumns);

    $(".opponent-card").mouseover(function() {
        $(this).addClass("text-white bg-danger");
    });
    $(".opponent-card").mouseout(function() {
        $(this).removeClass("text-white bg-danger");
    });

    $(".opponent-card").on("click", function() {
        currentOpponent = pokemon[$(this).attr("data-opponent")]
        // console.log(currentOpponent);
        roundOneStart();
    });
}

function roundOneStart() {
    masthead.text(playerPartner.levelOne.name + " Vs. " + currentOpponent.levelOne.name);
    displayRow.empty();
    displayRow.attr("id", "round-one-row");
    partnerCard.append(attackButton).css("width", "15rem").addClass("mx-auto");
    partnerCardWrapper.removeClass("col-3").addClass("col-6");

    currentOpponentWrapper.addClass("col-6");
    currentOpponentImage.attr("src", currentOpponent.levelOne.sprite);
    currentOpponentCardBodyTitle.text(currentOpponent.levelOne.name);
    currentOpponentCardBodyText.text("HP: " + currentOpponent.levelOne.hp);
    currentOpponentCardBody.append(currentOpponentCardBodyTitle, currentOpponentCardBodyText);
    currentOpponentCard.append(currentOpponentImage, currentOpponentCardBody).css("width", "15rem").addClass("mx-auto");
    currentOpponentWrapper.append(currentOpponentCard);


    $("#round-one-row").append(partnerCardWrapper, currentOpponentWrapper);

    $("#attack-button").on("click", playerAttacksRoundOne);
}


$(document).ready(function(){

    gameStart();

    var confirmButtonSection = $("<div>");
        confirmButtonSection.attr("id", "confirmationButtonSection");
        confirmButtonSection.addClass("mx-auto mt-4 text-center");
        $("#root").append(confirmButtonSection);

    var confirmationButton = $("<button>");
        confirmationButton.attr("type", "button");
        confirmationButton.attr("id", "confirmPartnerButton");
        confirmationButton.addClass("btn btn-primary");

    $(".character-card").mouseover(function() {
        $(this).addClass("text-white bg-primary");
    });
    $(".character-card").mouseout(function() {
        $(this).removeClass("text-white bg-primary");
    });

    $(".character-card").on("click", function() {
        playerPartner = pokemon[$(this).attr("data-partner")];
        // console.log(playerPartner);
        
        $("#confirmationButtonSection").empty();

        confirmationButton.text("Confirm: " + playerPartner.levelOne.name + "?");
        $("#confirmationButtonSection").append(confirmationButton);

        $("#confirmPartnerButton").on("click", function() {
            var playerIndex = pokemon.indexOf(playerPartner);
            pokemon.splice(playerIndex, 1);

            partnerHasBeenSelected();
        });
    });


});