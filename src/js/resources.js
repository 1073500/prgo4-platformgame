import { ImageSource, Sound, Resource, Loader,} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Clovy: new ImageSource('images/clovy-views.png'), 
    BG: new ImageSource('images/game-bg-groot.png'), 
    Coin: new ImageSource('images/coin.png'),
    PM: new ImageSource('images/balk-scaled.png'),
    PS: new ImageSource ('images/balk-klein.png'),
    PL: new ImageSource('images/balk-groot.png'),
    Bomb: new ImageSource('images/bomb.png'),
    Card: new ImageSource('images/kaart-in-fles-groot.png'),
    Urchy: new ImageSource('images/urchy.png'),
    
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }