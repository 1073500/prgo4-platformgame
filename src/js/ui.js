import { Actor, Label, Font, FontUnit, Color, Vector, ScreenElement } from "excalibur"

export class UI extends ScreenElement {

    scoreLabel
    cardLabel
    liveLabel
    highScoreLabel

    constructor() {
        super()
        this.z = 1000
        
        //score
        this.scoreLabel = new Label({
            text: 'Coins: 0',
            pos: new Vector(100, 50),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.addChild(this.scoreLabel)
        this.scoreLabel.text = `Coins: 0`

        //card
        this.cardLabel = new Label({
            text: 'Card: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.addChild(this.cardLabel)
        this.cardLabel.text = `Cards: 0`

        //lives
        this.liveLabel = new Label({
            text: 'Lives: 0',
            pos: new Vector(100, 150),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.addChild(this.liveLabel)
        this.liveLabel.text = `Lives: 0`

        //highscore
        this.highScoreLabel = new Label({
            text: 'Highscore: 0',
            pos: new Vector(1000, 50),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.addChild(this.highScoreLabel)
        this.highScoreLabel.text = `Highscore: 0`

        
    }

    
    showScore(score) {
        this.scoreLabel.text = `Coins: ${score}`

    }

    showCards(cards) {
        this.cardLabel.text = `Cards: ${cards}`

    }

    showLives(lives) {
        this.liveLabel.text = `Lives: ${lives}`

    }

    showHighScore(highScore) {
        this.highScoreLabel.text = `Highscore: ${highScore}`
    }

}