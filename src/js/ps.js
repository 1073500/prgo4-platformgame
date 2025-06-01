import { Actor, Vector, CollisionType, Shape } from "excalibur"
import { Resources } from './resources.js'

export class PS extends Actor {
    constructor() {
        super({width: Resources.PM.width,
            height: Resources.PM.height,
            collisionType: CollisionType.Fixed
        })

        this.z = -100

        this.graphics.use(Resources.PS.toSprite())
        this.pos = new Vector(50, 720)
        this.scale = new Vector(0.3, 0.3)
        //this.anchor = new Vector(0., 0) //makkelijk afbeelding centeren
    }

    onInitialize(engine) {
        const hitbox = Shape.Box(500, 150, Vector.Half, new Vector(0, 10))
        this.collider.set(hitbox)
    }

}
