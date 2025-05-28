import { Actor, Vector, Sprite } from "excalibur"
import { Resources } from './resources.js'

export class BG extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.BG.toSprite())
        //bg.pos = new Vector(400, 450 / 2)
        this.scale = new Vector(1, 1)
        this.anchor = new Vector(0, 0) //makkelijk afbeelding centeren

    }
    sprite

    onInitialize(engine){
        this.sprite = new Sprite({
            image: Resources.BG,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

} 


