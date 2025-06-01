import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Clovy } from './clovy.js'
import { BG } from './bg.js'
import { UI } from './ui.js'
import { Coin } from './coins.js'
import { PM } from './pm.js'
import { Bomb } from './bomb.js'
import { PS } from './ps.js'
import { Card } from './card.js'
import { PL } from './pl.js'
import { Urchy } from './urchy.js'

export class Game extends Engine {

    ui

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 800),
            }
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        console.log("start de game!")

        //achtergrond
        let bg = new BG()
        this.add(bg)

        //ui
        this.ui = new UI(30, 170)
        this.add(this.ui)

        //clovy
        let clovy = new Clovy("playerOne", 100, 100)
        this.add(clovy)

        // game vp
        this.currentScene.camera.strategy.lockToActor(clovy)
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200))

        //bomb
        let bomb = new Bomb("Bomb")
        this.add(bomb)

        //coins
        for (let i = 0; i < 20; i++) {
            let coin = new Coin()
            this.add(coin)
        }

        //platform klein
        let platformS = new PS
        this.add(platformS)

        //platform middel
        for (let i = 0; i < 3; i++) {
            let platformM = new PM()
            this.add(platformM)
        }

        //platform groot
        let platformL = new PL()
        this.add(platformL)

        //kaart in fles
        for (let i = 0; i < 5; i++) {
            let card = new Card()
            this.add(card)
        }

        //urchy
        for (let i = 0; i < 8; i++) {
            let urchy = new Urchy("Urchy")
            this.add(urchy)
        }
    }

}

new Game()
