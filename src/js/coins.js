import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Coin extends Actor {
    constructor() {
        super({width: Resources.Coin.width,
            height: Resources.Coin.height,
            collisionType: CollisionType.Active
            })

        this.graphics.use(Resources.Coin.toSprite())
        this.pos.x = Math.random() * (2000 - this.width) + this.width / 2
        this.scale = new Vector(0.08, 0.08)


    }


}
