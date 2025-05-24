import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bomb extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.Bomb.toSprite())
        this.pos = new Vector(1280/2, 400)
        this.scale = new Vector(0.30, 0.30)


        this.vel = new Vector(120, 0)
        this.on('exitviewport', () => this.resetPosition())

        

    }
    resetPosition() {
        this.pos.x = 1280/2
    }
}
