import EPT from './utils.js'

import WebFont from './plugins/webfont.js'
class Boot extends Phaser.Scene {
    constructor() {
       // super('Boot');
         super({ key: 'Boot' });
    }
    preload() {
        this.load.image('background', 'img/background.png');
        this.load.image('logo-enclave', 'img/logo-enclave.png');
        this.load.image('loading-background', 'img/loading-background.png');
        WebFont.load({ custom: { families: ['Berlin'], urls: ['fonts/BRLNSDB.css'] } });
    }
    create() {

        console.log("Inside Boot")
        EPT.world = {
            width: this.cameras.main.width,
            height: this.cameras.main.height,
            centerX: this.cameras.main.centerX,
            centerY: this.cameras.main.centerY
        };
        EPT.Lang.updateLanguage('en');
        EPT.text = EPT.Lang.text[EPT.Lang.current];
        console.log("Return Boot")
        this.scene.start('Preloader');
    }
};


export default Boot;
