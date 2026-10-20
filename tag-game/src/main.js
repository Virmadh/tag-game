import './style.css';
import Phaser from 'phaser';
import playerImage from './assets/Player.png';


class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }
    preload() {
        this.load.image('player', playerImage);
    }
    create() {
        this.cameras.main.setBackgroundColor('#243447');
        this.player = this.add.image(400,300, 'player');
        this.player.setDisplaySize(40,40);
    }
    update() {
        //add movement later for player
    }
} 
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'app',
    scene: GameScene
};
new Phaser.Game(config);