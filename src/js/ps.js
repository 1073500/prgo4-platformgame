import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class PS extends Actor {
    constructor() {
        super({width: Resources.PS.width,
            height: Resources.PS.height,
            collisionType: CollisionType.Fixed
        })

        this.graphics.use(Resources.PS.toSprite())
        this.pos = new Vector(100, 720)
        this.scale = new Vector(0.3, 0.3)
        //this.anchor = new Vector(0., 0) //makkelijk afbeelding centeren
    }

}
