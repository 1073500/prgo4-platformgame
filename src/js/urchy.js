import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Clovy } from "./clovy.js"

export class Urchy extends Actor {
    constructor() {
        super({
            width: Resources.Urchy.width,
            height: Resources.Urchy.height,
            collisionType: CollisionType.Fixed
        })



        this.graphics.use(Resources.Urchy.toSprite())
        this.pos = new Vector(600, 100)
        this.scale = new Vector(0.15, 0.15)
        this.direction = 1

    }

    // bom raakt Clovy
    onInitialize(engine) {
        this.on('collisionstart', (event) => this.touchClovy(event))
    }


    touchClovy(event) {
        if (event.other.owner instanceof Clovy) {
            event.other.owner.minLives()
            console.log("Clovy heeft urchy geraakt:(")
        }
    }


}
