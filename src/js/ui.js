import { Actor, Label, Font, FontUnit, Color, Vector } from "excalibur"

export class UI extends Actor {

    scoreLabel
    cardLabel

    constructor() {
        super()
        
        this.scoreLabel = new Label({
            text: 'Coins: 0',
            pos: new Vector(100, 50),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.addChild(this.scoreLabel)
        this.scoreLabel.text = `Coins: 0`


        this.cardLabel = new Label({
            text: 'Coins: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.addChild(this.cardLabel)
        this.cardLabel.text = `Cards: 0`

        
    }

    
    showScore(score) {
        this.scoreLabel.text = `Coins: ${score}`

    }

    showCards(cards) {
        this.cardLabel.text = `Cards: ${cards}`

    }

}