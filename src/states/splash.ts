import * as Phaser from 'phaser'
import {centerGameObjects} from '../utils.ts'

export class SplashState extends Phaser.State {
    loaderBg: Phaser.Sprite
    loaderBar: Phaser.Sprite

    init() { }

    preload() {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
        centerGameObjects([this.loaderBg, this.loaderBar])

        this.load.setPreloadSprite(this.loaderBar)
        //
        // load your assets
        //
        this.load.image('player', 'assets/images/player.png')
    }

    create() {
        this.game.state.start('Menu')
    }

}
