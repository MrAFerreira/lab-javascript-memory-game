class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // Add the rest of the properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ...
    let auxArray = this.cards;
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = auxArray[currentIndex];
      auxArray[currentIndex] = auxArray[randomIndex];
      auxArray[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    // ...
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  isFinished() {
    // ...
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
