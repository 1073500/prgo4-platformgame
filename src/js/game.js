import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Clovy } from './clovy.js'
import {BG} from './bg.js'
//import { UI } from './ui.js'
import { Coin } from './coins.js'
import { PM } from './pm.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        
        //achtergrond
        let bg = new BG()
        this.add(bg)

        //ui

        //clovy
        let clovy = new Clovy("playerOne", 0, 0)
        this.add(clovy)

        //coins
        let coin = new Coin()
        this.add(coin)

        //platform klein
        let platformS = new Actor() 
        this.add(platformS)

        //platform middel
        let platformM = new PM()
        this.add(platformM)

        //platform groot
        let platformL = new Actor() 
        this.add(platformL)

        //kaart in fles
        let card = new Actor()
        this.add(card)
    }

}

new Game()
