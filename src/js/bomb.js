import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bomb extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.Bomb.toSprite())
        this.pos = new Vector(1280/2, 400)
        this.scale = new Vector(0.30, 0.30)
        //this.anchor = new Vector(0., 0) //makkelijk afbeelding centeren
    }

}
