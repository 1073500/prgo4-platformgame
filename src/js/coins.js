import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Coin extends Actor {
    constructor() {
        super({width: Resources.Coin.width,
            height: Resources.Coin.height,
            })

        this.graphics.use(Resources.Coin.toSprite())
        this.pos.x = Math.random() * (1280 - this.width) + this.width / 2
        this.scale = new Vector(0.08, 0.08)

    }


}
