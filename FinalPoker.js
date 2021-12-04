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
      this.dek = []
      this.cir = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "Jack":11, "Queen":12, "King":13, "Ace":14}
      this.res = {'Royal Flush!': 10, 'Straight Flush!':9,'Four of a kind!': 8, 'Full house!': 7, 'Flush!': 6, 'Straight!': 5, 'Three of a kind!': 4, 'Two Pairs!': 3, 'One Pair!': 2, "Hight card!": 1
      }
    }
    createDeck(){
      const card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
      const suits = ["clubs","diamonds","hearts","spades"];
      for(let i = 0; i < suits.length; i++){
        for(let j =0; j < card.length; j++){
          this.car.push(new Deck(suits[i], card[j]))
        }
      }
      return this.car
    }
    randomDeck(){
        for(let i =0; i < 5; i++){
            let rand = this.car.splice(Math.floor(Math.random()*(this.car.length)),1)
            this.dek.push(...rand)
        }
        return this.dek
    }
    deckEvaluator(){
        for(const key in this.cir){
            for(let i = 0; i < 5; i++){
            if(key === this.dek[i].suit){
                this.cer.push(this.dek[i])
            }
         }
        }
        return this.cer
    }
    isValue(){
        let tru = 0;
        const colors = this.cer[0].cards == this.cer[1].cards && this.cer[0].cards == this.cer[2].cards && this.cer[0].cards == this.cer[3].cards && this.cer[0].cards == this.cer[4].cards
        let win;
        for( let i = 0; i <= 3; i++){
            if(this.cir[this.cer[i].suit] - this.cir[this.cer[i+1].suit] === -1){
               tru++
            }
            if(this.cir[this.cer[0].suit] === 10 && tru === 4  && colors){
                win = 'Royal Flush!'
            }else if(tru === 4  && colors){
                win = 'Straight Flush!'
            }else if(tru === 4){
                win = 'Straight!'
            }else if(colors){
                win = 'Flush!'
            }
    }
    return win
    }
    isPairisThreeisFullisFour(){
        let win;
        let v = 0;
        const ap = []
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
            win = 'Two Pairs!'
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
    isHighestCard(){
        let win = 'Hight card!'
        return win
    }
    result(){
        let win;
        let won = []
        const aray = [
            this.isValue(),
            this.isPairisThreeisFullisFour(),
            this.isHighestCard(),
        ]
        for(const key in this.res){
            for(let i = 0; i < 3; i++){
                if(key === aray[i]){
                    won.push(this.res[key])
                    won.sort((a,b)=> a-b)
                    win = won[won.length -1]
                }

            }
            for(const[key,value] of Object.entries(this.res)){
                if(value === win){
                    win = key
                    if(win === 'Hight card!'){
                    win = `Hight card! : ${this.cer[this.cer.length -1].suit}`
                }}     

                }

}
    return win         
}
  }
const b = new Cards();
console.log(b.createDeck())
b.randomDeck()
console.log(b.deckEvaluator())
console.log(b.result())