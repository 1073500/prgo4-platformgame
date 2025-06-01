import { Actor, Vector, CollisionType, Shape } from "excalibur"
import { Resources } from './resources.js'

export class PM extends Actor {
    constructor() {
        super({width: Resources.PM.width,
            height: Resources.PM.height,
            collisionType: CollisionType.Fixed
        })

        this.z = -100

        this.graphics.use(Resources.PM.toSprite())
        this.pos.x = Math.random() * 2000
        this.pos.y = Math.random() * 1200
        this.scale = new Vector(0.4, 0.4)
        //this.anchor = new Vector(0., 0) //makkelijk afbeelding centeren
    }

    onInitialize(engine) {
        const hitbox = Shape.Box(500, 200, Vector.Half, new Vector(0, 0))
        this.collider.set(hitbox)
    }

}
