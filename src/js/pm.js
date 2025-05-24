import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class PM extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.PM.toSprite())
        this.pos = new Vector(1280/2, 570)
        this.scale = new Vector(0.5, 0.5)
        //this.anchor = new Vector(0., 0) //makkelijk afbeelding centeren
    }

}
