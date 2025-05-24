import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Coin extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.Coin.toSprite())
        //this.pos = new Vector(400, 450 / 2)
        this.scale = new Vector(0.08, 0.08)
        this.anchor = new Vector(0, 0) //makkelijk afbeelding centeren

    }

}
