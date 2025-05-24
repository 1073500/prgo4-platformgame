import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Coin extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.Coin.toSprite())
        this.pos = new Vector(580, 470)
        this.scale = new Vector(0.08, 0.08)

    }

}
