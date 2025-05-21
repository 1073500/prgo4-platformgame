// alles wat je van excalibur nodig hebt moet je importeren
import { Actor, Vector, Keys, CollisionType } from "excalibur"
import { Resources } from './resources.js'

// export, zodat spongebob in de game komt
export class Clovy extends Actor {

    name
    score
    player

    constructor(name, x, y, player) {
        super({
            width: Resources.Clovy.width,
            height: Resources.Clovy.height,
            collisionType: CollisionType.Active
        })

        this.score = 0
        console.log(`My name is ${name}`)
        this.name = name
        this.player = player


        console.log("Ben er klaar voor!")
        this.graphics.use(Resources.Clovy.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.2, 0.2)
       
    }


    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        //keys playerOne
        if (this.player === "playerOne") {
            
            if (kb.isHeld(Keys.W)) {
                yspeed = -300
            }
            if (kb.isHeld(Keys.S)) {
                yspeed = 300
            }
            if (kb.isHeld(Keys.A)) {
                xspeed = -300
                this.graphics.flipHorizontal = true       // flip de sprite
            }
            if (kb.isHeld(Keys.D)) {
                xspeed = 300
                this.graphics.flipHorizontal = false      // flip de sprite
            }
            this.vel = new Vector(xspeed, yspeed)
    
        }

    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

}