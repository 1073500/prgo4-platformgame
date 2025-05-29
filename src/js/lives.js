import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Lives extends Actor {
    constructor() {
        super({width: Resources.Lives.width,
            height: Resources.Lives.height,
            })

        this.graphics.use(Resources.Lives.toSprite())
        this.pos = new Vector(30, 30)
        this.scale = new Vector(0.2, 0.2)

    }


}
