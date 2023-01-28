class Card {
   
    constructor(value){
    this.value = value;
    }


    getValue() {
        return this.value;
    }
}

class Game {
    // create 2 players taking in their names
    // divide out the 26 cards in between
    // start the game
    // have it ask player 1 "What card do you want to play"
    // then have it ask player 2 "What card do you want to play"
    // after that it will tell the players which player got the point then store each point

    // Turn instructions; "Ask player 1 what card do you want to play" then ask player 2, 
    // then it will compare each players cards
    // The player with the higher score will have their score incremented 
    // List the scores out after each turn
    // Repeats until all cards are used up
    // Then compare players scores then list which player won and their score

    // condition to end the game is a player is out of cards

    constructor(player1Name, player2Name) {

        this.player1Name = player1Name;
        this.player2Name = player2Name;
       
        createGame();

    }

    createGame() {
        pick = null

        while (pick !== "QUIT") {

            pick = prompt("would you like play a game of war with players" + this.player1.getName() + "and" + this.player2.getName() + "? Y for Yes, QUIT for quit.")
            
            this.Deck = [];
            this.deck1 = [];
            this.deck2 = [];

            createDeck()

            splitDeck()

            this.player1 = Player(this.player1Name, this.deck1)
            this.player2 = Player(this.player2Name, this.deck2)

            playGame();
        }
    }

    createDeck() {

        for (i = 0; i < 4; i++); {
            for (i = 1; i < 14; i++) {
                this.Deck.push(Card[i])
            }
        }

    }

    splitDeck() {

        for (i = 0; i < 26; i++) {
            num = getRandomInt(this.Deck.length)
            currCar = this.Deck[num]
            this.deck1.push(currCard)
            this.Deck.splice(num, 1)

        }
        for (i = 0; i < 26; i++) {
            num = getRandomInt(this.Deck.length)
            currCar = this.Deck[num]
            this.deck2.push(currCard)
            this.Deck.splice(num, 1)

        }

    }

    playGame() {

        while ( (this.player1.getHandSize() !== 0) && (this.player2.getHandSize() !== 0) ) {
            player1Card = this.player1.getCard();
            player2Card = this.player2.getCard();

            if (player1Card.getValue() > player2Card.getValue()) {
                this.player1.addCardToDeck(olayer2Card)
            }
            else if (player1Card.getValue() < player2Card.getValue()) {
                this.player2.addCardToDeck(olayer1Card)
            }
            else {
                playWar();
            }

        }

        if(this.player1.getHandSize === 0) {
            print(this.player1.getName() + "has lost the game" + this.player2.getName() + "congrats you've won!")
        }

        else {
            print(this.player2.getName() + "has lost the game" + this.player1.getName() + "congrats you've won!")
        }


    }

    playWar() {

        war = True;
        player1Cards = [];
        player2Cards = [];

        while (war) {

            for (i = 0; i < 3; i++) {
                player1Cards.push(player1.getCard());
            }
            for (i = 0; i < 3; i++) {
                player2Cards.push(player2.getCard());
            }

            player1Card = player1.getCard();
            player2Card = player2.getCard();

        }

        if (player1Card.getValue() > player2Card.getValue()) {
            
            for (i < 0; i < player1Cards.length; i++) {
                currCard = player1Cards[i]
                this.player1.push(currCard)
            }
        

            for (i < 0; i < player2Cards.length; i++) {
                currCard = player2Cards[i]
                this.player2.push(currCard)  
            } 

            this.player1.addCardToDeck(player1Card);
            this.player2.addCardToDeck(player2Card);

            war = False
        }

        else if (player1Card.getValue() < player2Card.getValue()) {
            
            for (i < 0; i < player1Cards.length; i++) {
                currCard = player1Cards[i]
                this.player2.push(currCard)
            }
        

            for (i < 0; i < player2Cards.length; i++) {
                currCard = player2Cards[i]
                this.player2.push(currCard)  
            } 

            this.player2.addCardToDeck(player1Card);
            this.player2.addCardToDeck(player2Card);

            war = False
        }
        else {
            
            player1Cards.push(player1Card);
            player2Cards.push(player2Card);
        }


    }

}

class Player {

    constructor(name, cards) {
        this.name = name
        this.cards = cards;
    }

    getName( {
        return this.name;
    })

    getCard() {
        // Player will enter value
        // Check if cards contain a card with that value
        // If yes, play card
        // If no, tell player "Card is unavailable"
    
    cardNum =  getRandomInt(this.cards.length())

    card = this.cards[cardNum]

    this.removeCardFromDeck(cardNum)

    }

    removeCardFromDeck(index) {

        this.cards.splice(index, 1)
    }

    addCardToDeck(card) {
        this.cards.push[card]
    }

    getHandSize() {
        return this.cards.length;
    }
}

getRandomInt() {
    return Math.floor(Math.random() * max);


}
