import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class PL extends Actor {
    constructor() {
        super({width: Resources.PL.width,
            height: Resources.PL.height,
            collisionType: CollisionType.Fixed
        })

        this.graphics.use(Resources.PL.toSprite())
        this.pos = new Vector(1000, 500)
        this.scale = new Vector(0.6, 0.6)
        //this.anchor = new Vector(0., 0) //makkelijk afbeelding centeren
    }

}
