import * as Phaser from 'phaser'
// import * as WebFont from 'webfontloader'

export class BootState extends Phaser.State {
    stage: Phaser.Stage
    fontsReady: boolean

    init() {
        this.stage.backgroundColor = '#EDEEC9'
        this.fontsReady = false
        this.fontsLoaded = this.fontsLoaded.bind(this)
        this.game.stage.smoothed = false
    }

    preload() {
        // WebFont.load({
        //     google: {
        //         families: ['Nunito']
        //     },
        //     active: this.fontsLoaded
        // })

        let text = this.add.text(this.world.centerX, this.world.centerY, 'LOADING', { font: "16px 'gameboy'", fill: '#dddddd', align: 'center' })
        text.anchor.setTo(0.5, 0.5)

        this.load.image('loaderBg', './assets/images/loader-bg.png')
        this.load.image('loaderBar', './assets/images/loader-bar.png')
        this.load.image('bg', './assets/images/bg.jpg')
        this.load.image('guy', './assets/images/guy.png')
        this.load.image('syz', './assets/images/syz.png')
        this.load.image('syz2', './assets/images/syz2.png')
        this.load.image('bg1', './assets/images/bg1.png')
        this.load.image('bg2', './assets/images/bg2.png')
        this.load.image('bg3', './assets/images/bg3.png')
        this.load.image('bg4', './assets/images/bg4.png')
        this.load.spritesheet('trip_fire', './assets/images/trip_fire.png', 35, 40)
        this.load.spritesheet('trip_run', './assets/images/trip_run.png', 27, 42)
        this.load.spritesheet('trip_jump', './assets/images/trip_jump.png', 26, 46)
        this.load.spritesheet('normal_jump', './assets/images/normal_jump.png', 23, 46)
        this.load.spritesheet('normal_run', './assets/images/normal_run.png', 29, 41)
        this.load.audio('hitmob', './assets/sounds/hitmob.mp3')
        this.load.audio('pickup', './assets/sounds/pickup.mp3')
        this.load.audio('reload', './assets/sounds/reload.mp3')
        this.load.audio('shot', './assets/sounds/shot.mp3')
        this.load.audio('jump', './assets/sounds/jump.mp3')
    }

    render() {
        // if (this.fontsReady) {
            this.game.state.start('Splash')
        // }
    }

    fontsLoaded() {
        this.fontsReady = true
    }

}
