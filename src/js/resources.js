import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Clovy: new ImageSource('images/clovy.png'), 
    BG: new ImageSource('images/game-bg.png'), 
    Coin: new ImageSource('images/coin.png'),
    PM: new ImageSource('images/balk-scaled.png'),
    PS: new ImageSource ('images/balk-klein.png'),
    Bomb: new ImageSource('images/bomb.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }