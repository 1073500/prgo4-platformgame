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


        this.vel = new Vector(120, 0)
        this.on('exitviewport', () => this.resetPosition())



    }
    resetPosition() {
        this.pos.x = 1280 / 2
    }

    // bom raakt Clovy
    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitClovy(event))
    }


    hitClovy(event) {
        if (event.other.owner instanceof Clovy) {
            event.other.owner.kill()
            console.log("De bom heeft Clovy geraakt :(")
        }
    }


}
