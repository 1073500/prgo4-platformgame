// alles wat je van excalibur nodig hebt moet je importeren
import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'
import { Coin } from './coins.js'
import { Card } from './card.js'
import { Lives } from './lives.js'


// export, zodat spongebob in de game komt
export class Clovy extends Actor {

    player
    score
    cards
    lives
    highScore

    constructor(player, x, y) {
        super({
            width: Resources.Clovy.width,
            height: Resources.Clovy.height,
            collisionType: CollisionType.Active
        })
        this.body.bounciness = 0.1

        this.score = 0
        this.player = player
        this.cards = 0
        this.lives = 3
        this.highScore = Number(localStorage.getItem("highScore")) || 0


        console.log(`clovy heeft: ${this.lives} levens`)

        this.graphics.use(Resources.Clovy.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.3, 0.3)
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)

        this.events.on("exitviewport", (e) => this.clovyLeft(e))

    }
    //onPreUpdate is een functie die elke frame wordt aangeroepen
    // hier kan je dingen doen voordat de game wordt getekend
    onPreUpdate(engine, delta) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        //keys playerOne
        if (this.player === "playerOne") {

            if (kb.isHeld(Keys.A)) {
                xspeed = -300
                this.graphics.flipHorizontal = true       // flip de sprite
            }
            if (kb.isHeld(Keys.D)) {
                xspeed = 300
                this.graphics.flipHorizontal = false      // flip de sprite
            }
            this.vel = new Vector(xspeed, this.vel.y)

        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.body.applyLinearImpulse(new Vector(0, -200 * delta))
        }

    }

    // onInitialize
    // hier kan je dingen doen voordat de game begint
    //items verzamelen
    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))

        this.scene.engine.ui.showLives(this.lives)

        // ophalen uit ls
        let savedHighScore = Number(localStorage.getItem("highScore")) || 0
        this.highScore = savedHighScore
        this.scene.engine.ui.showHighScore(this.highScore)

    }


    hitSomething(event) {
        if (event.other.owner instanceof Coin) {
            // Je kan `instanceof` gebruiken om te zien waar je tegenaan botst.
            event.other.owner.kill()
            this.score++
            console.log(`${this.score}`)
            this.scene.engine.ui.showScore(this.score)

            if (this.score > this.highScore) {
                this.highScore = this.score
                localStorage.setItem("highScore", this.highScore)
                this.scene.engine.ui.showHighScore(this.highScore)
            }
        }
        if (event.other.owner instanceof Card) {
            event.other.owner.kill()
            this.cards++
            console.log(`${this.cards}`)
            this.scene.engine.ui.showCards(this.cards)
            if (this.cards === 5) {
                console.log("Je hebt alle kaarten verzameld!")
            }
        }
    }


    gameOver() {
        this.score = 0
        this.cards = 0
        this.lives = 0
        console.log(`Clovy heeft ${this.lives} levens over!`)
        this.scene.engine.ui.showScore(this.score)
        this.scene.engine.ui.showCards(this.cards)
        this.scene.engine.ui.showLives(this.lives)
        this.scene.engine.ui.showHighScore(this.highScore)
        this.kill()
        console.log(`Highscore is ${this.highScore}`)
    }

    clovyLeft() {
        this.on("exitviewport", (event) => this.kill())
        this.gameOver()
        console.log("Clovy is uit het scherm gevallen!")

    }

    minLives() {
        this.lives--
        this.scene.engine.ui.showLives(this.lives)
        if (this.lives < 1) {
            console.log("Clovy heeft geen levens meer!");
            this.kill()
        }
    }




}