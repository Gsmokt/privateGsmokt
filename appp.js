class Deck {
    constructor(cards,suit){
      this.cards = cards,
      this.suit = suit
    }
  }
  class Cards{
    constructor(){
      this.car = []
      this.cer = []
      this.cir = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "jack":11, "queen":12, "king":13, "ace":14}
    }
    createDeck(){
      const card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
      const suits = ["clubs", "diamonds", "spades", "hearts"];
      for(let i = 0; i < suits.length; i++){
        for(let j =0; j < card.length; j++){
          this.car.push(new Deck(suits[i], card[j]))
        }
      }
      return this.car
    }
    randomDeck(){
        for(let i =0; i < 5; i++){
          this.cer.push(this.car[(Math.floor(Math.random()*(this.car.length)))])
        }
        return this.cer
    }
    isStraightFlush(){
        let tru = 0;
        let win;
        for( let i = 0; i <= 3; i++){
            if(this.cir[this.cer[i].suit] - this.cir[this.cer[i+1].suit] === -1){
               tru++
            }
            if(this.cir[this.cer[0].suit] === 10 && tru === 4  && isFlush()){
                win = 'Royal Flush!'
            }else if(tru === 4  && isFlush()){
                win = 'Straight Flush!'
            }else if(tru === 4){
                win = 'Straight!'
            }
    }
       return win
    }
    isFlush(){
        let win;
        if(this.cer[0].cards == this.cer[1].cards && this.cer[0].cards == this.cer[2].cards && this.cer[0].cards == this.cer[3].cards && this.cer[0].cards == this.cer[4].cards){
            win = 'Flush!'
          }
          return win
    }
    isPairisThreeisFullisFour(){
        let win;
        let v = 0;
        let ap = []
        for( let i = 0; i < this.cer.length; i++){
          ap.push(this.cir[this.cer[i].suit])
        }
        for( let i = 1; i < this.cer.length; i++){
           if(ap[0] === ap[i]){
               v++
           }
          }
          for( let i = 2; i < this.cer.length; i++){
            if(ap[1] === ap[i]){
                v++
            }
           }
           for( let i = 3; i < this.cer.length; i++){
            if(ap[2] === ap[i]){
                v++
            }
           }
           for( let i = 4; i < this.cer.length; i++){
            if(ap[3] === ap[i]){
                v++
            }
           }
           if(v==1){
               win = 'One Pair!'
           }
           if(v==2){
            win = 'Two Pair!'
        }
        if(v==3){
            win = 'Three of a kind!'
        }
        if(v==4){
            win = 'Full house!'
        }
        if(v==6){
            win = 'Four of a kind!'
        }
        return win
    }
    // isHighestCard(){
    //     let win = Math.max(...this.isPairisThreeisFullisFour.ap)
    //     return win
    // }
    result(){
        let win;
        const aray = [
            this.isStraightFlush(),
            // this.isHighestCard(),
            this.isFlush(),
            this.isPairisThreeisFullisFour(),
        ]
        for(const a of aray){
            switch(a){
                case 'Royal flush!':
                    win = 'Royal flush!'
                    break;
                case 'Straight Flush!':
                    win = 'Straight Flush!'
                    break;
                case 'Four of a kind!':
                    win = 'Four of a kind!'
                    break;
                case 'Full house!':
                    win = 'Full house!'
                    break;
                case 'Flush!':
                    win = 'Flush!'
                    break;
                case 'Straight!':
                    win = 'Straight!'
                    break;
                case 'Three of a kind!':
                        win = 'Three of a kind!'
                        break;
                case 'Two Pair!':
                            win = 'Two Pair!'
                            break;
                case 'One Pair!':
                                win = 'One Pair!'
                                break;
               default:
                //    win = `Hight card! - ${this.isHighestCard()}`
            }
        }
        return win
    }
}
const b = new Cards();
console.log(b.createDeck())
console.log(b.randomDeck())
// console.log(b.deckEvaluator())
console.log(b.result())
   
