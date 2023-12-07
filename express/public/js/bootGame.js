class bootGame extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    create() {
        console.log("game is booting...");
        this.scene.start("PlayGame");
    }
}