import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class BG extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.BG.toSprite())
        //bg.pos = new Vector(400, 450 / 2)
        this.scale = new Vector(1, 1)
        this.anchor = new Vector(0, 0) //makkelijk afbeelding centeren

    }

}
