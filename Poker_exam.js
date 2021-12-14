class Card {
  constructor(suit, cardRank){
    this.suit = suit,
    this.cardRank = cardRank
  }
}
class Deck{
  constructor(){
    this.deck = [],
    this.sorted = [],
    this.hands = [],
    this.cardValue = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "Jack":11, "Queen":12, "King":13, "Ace":14},
    this.rank = {'Royal Flush!': 10, 'Straight Flush!':9,'Four of a kind!': 8, 'Full house!': 7, 'Flush!': 6, 'Straight!': 5, 'Three of a kind!': 4, 'Two Pairs!': 3, 'One Pair!': 2, "Hight card!": 1
    }
  }
  createDeck(){
    const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const suits = ["clubs","diamonds","hearts","spades"];
    for(let i = 0; i < suits.length; i++){
      for(let j = 0; j < rank.length; j++){
        this.deck.push(new Card(suits[i], rank[j]))
      };
    };
    return this.deck
  };
  createHand(){
      for(let i = 0; i < 5; i++){
          let randomCard = this.deck.splice(Math.floor(Math.random()*(this.deck.length)),1)
          this.hands.push(...randomCard)
      };
      for(const key in this.cardValue){
        for(let i = 0; i < 5; i++){
        if(key === this.hands[i].cardRank){
            this.sorted.push(this.hands[i])
        };
     };
    };
      return this.sorted
  };
  isHandFlush(){
      let truth = 0;
      const colors = this.sorted[0].suit === this.sorted[1].suit && this.sorted[0].suit === this.sorted[2].suit && this.sorted[0].suit === this.sorted[3].suit && this.sorted[0].suit === this.sorted[4].suit;
      let win;
      for(let i = 0; i <= 3; i++){
          if(this.cardValue[this.sorted[i].cardRank] - this.cardValue[this.sorted[i+1].cardRank] === -1){
             truth++
          };
          if(this.cardValue[this.sorted[0].cardRank] === 10 && truth === 4  && colors){
              win = 'Royal Flush!'
          }else if(truth === 4  && colors){
              win = 'Straight Flush!'
          }else if(truth === 4){
              win = 'Straight!'
          }else if(colors){
              win = 'Flush!'
          };
  };
  return win
  };
  isHandValue(){
      let win;
      let truth = 0;
      const value = [];
      for( let i = 0; i < this.sorted.length; i++){
        value.push(this.cardValue[this.sorted[i].cardRank])
      };
      for( let i = 1; i < this.sorted.length; i++){
         if(value[0] === value[i]){
             truth++
         };
        };
        for( let i = 2; i < this.sorted.length; i++){
          if(value[1] === value[i]){
              truth++
          };
         };
         for( let i = 3; i < this.sorted.length; i++){
          if(value[2] === value[i]){
              truth++
          };
         };
         for( let i = 4; i < this.sorted.length; i++){
          if(value[3] === value[i]){
              truth++
          };
         };
         if(truth === 1){
             win = 'One Pair!'
         };
         if(truth==2){
          win = 'Two Pairs!'
      };
      if(truth==3){
          win = 'Three of a kind!'
      };
      if(truth==4){
          win = 'Full house!'
      };
      if(truth==6){
          win = 'Four of a kind!'
      };
      return win
  };
  isHighestCard(){
      let win = 'Hight card!'
      return win
  };
  result(){
      let win;
      let won = [];
      const aray = [
          this.isHandFlush(),
          this.isHandValue(),
          this.isHighestCard(),
      ];
      for(const key in this.rank){
          for(let i = 0; i < 3; i++){
              if(key === aray[i]){
                  won.push(this.rank[key])
                  won.sort((a,b)=> a-b)
                  win = won[won.length -1]
              };
            };
          for(const[key,value] of Object.entries(this.rank)){
              if(value === win){
                  win = key
                  if(win === 'Hight card!'){
                  win = `Hight card! : ${this.sorted[this.sorted.length -1].cardRank}`
              }};     
            };
        };
  return win         
};
};
const b = new Deck();
b.createDeck();
console.log(b.createHand());
console.log(b.result());



