import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Clovy } from "./clovy.js"

export class Bomb extends Actor {
    constructor() {
        super({
            width: Resources.Bomb.width,
            height: Resources.Bomb.height,
            collisionType: CollisionType.Fixed
        })



        this.graphics.use(Resources.Bomb.toSprite())
        this.pos = new Vector(1280 / 2, 400)
        this.scale = new Vector(0.30, 0.30)
        this.direction = 1

        this.vel = new Vector(120 * this.direction, 0)

    }
    onPostUpdate(engine) {
        if(this.direction === 1 && this.pos.x > 1200) {
            this.direction = -1
            this.vel = new Vector(120 * this.direction, 0)

        }

        if(this.direction === -1 && this.pos.x < 100) {
            this.direction = 1
            this.vel = new Vector(120 * this.direction, 0)

        }
    }

    // bom raakt Clovy
    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitClovy(event))
    }


    hitClovy(event) {
        if (event.other.owner instanceof Clovy) {
           // event.other.owner.kill()
           event.other.owner.gameOver()
            console.log("De bom heeft Clovy geraakt :(")
        }
    }


}
