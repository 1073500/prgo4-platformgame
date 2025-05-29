import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Card extends Actor {
    constructor() {
        super({width: Resources.Card.width,
            height: Resources.Card.height,
            })

        this.graphics.use(Resources.Card.toSprite())
        this.scale = new Vector(0.2, 0.2)
        this.pos = new Vector (400, 200)
    }


}
