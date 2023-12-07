class playGame extends Phaser.Scene {

    constructor() {
        super("PlayGame");

        this.c;
        this.x;
        this.time = 0;
        this.frame = 0;
        this.S = Math.sin;
        this.C = Math.cos;
        this.T = Math.tan;
        this.counter = 0;

    }

    R(r, g, b, a) {
        a = a === undefined ? 1 : a;
        return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
    };

    u1(t) {
        let i = 0;
        let j = 0;
        this.c.width = 1920;
        for (i = 0; i < 31; i++) {
            for (j = 25; j > -25; j--) {
                this.x.fillRect(960 + j * i * .5 *
                    this.C(i * .2) +
                    this.C(2 * t + i * .2) * 300, 540 + j * i * .5 *
                    this.S(i * .2) +
                this.S(2.2 * t + i * .2) * 200, 9, 9)
            }
        }
    }

    // Chinese Dragon
    u(t) {
        let a;
        let b;
        let c;
        let g = (d, e, f = 0) => d * d > 5 ? f :
            g(2 * d * e - .7, this.S(e * e * 2 - d * d * 2), f + 1)
        g;
        for (b = a = 1234; b--; this.x.fillRect(t * 61, b, c, 1))
            g, this.x.fillStyle = this.R(c =
                g(3 * b / a - 1, 1 + t / 11) ** 2, c / 5)
    }

    // DataMeta
    u3(t) {
        let i = 0;
        this.c.width |= i = 490
        for (this.x.translate(1013, 577); i--; this.x.rotate(.9999 ** t)) this.x.rect(-1e3, i % 1 * 64, 2e3, 80 - this.C(i % 1 + t) * 64)
        this.x.fill`evenodd`
    }


    u4(t) {
        let x = this.x;
        let c = this.c;
        let S = this.S;
        let Z = 0;
        let X = 0;
        let Y = 0;
        let i = 0;

        x.beginPath(c.width |= X = Y = Z = 0.004)
        for (i = t ** .4 * 499 | 0; i--; x.lineTo(960 + (Z + X) * i * 199, 540 + Y * i * 199)) X += Y * Z + Y, Y += Y * Y - X * X - Z - X, Z += -Z * Y * X + Y
        x.stroke()
    }

    create() {

        let canvasTexture = this.textures.createCanvas('dwitter', 1920, 1080);

        this.c = canvasTexture.getSourceImage();
        this.x = this.c.getContext('2d');

        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(1);

        console.log("dwitter created");

        this.debugText = this.add.text(16, 16, 'starting...', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#00ff00'
        });
        this.debugText.setScrollFactor(0);

        this.socket = io();
        this.socket.on('chat message', function (packetRcv) {
            // console.log(packetRcv);
            myPacket = JSON.parse(packetRcv);
            let counter = myPacket.counter;
            myCounter = counter;
            let message = myPacket.message;
            let connectedUsers = myPacket.connectedUsers;
            // $('#messages').append($('<li>').text(counter + " " + message + ", connectedUsers= " + connectedUsers));
            //console.log(counter + " " + message + ", connectedUsers= " + connectedUsers);
        });

        //this.initGameInterval(this);


    }

    getStatus() {
        let packet = {
            date: Date(),
            message: 'one more cat'
        }
        this.socket.emit('chat message', JSON.stringify(packet));
    }

    initGameInterval(that) {
        // check for updates every n seconds
        setInterval(function () {
            that.getStatus();
        }, 1000);
    }



    update2() {

        this.time = this.frame / 60;

        if (this.time * 60 | 0 == this.frame - 1) {
            this.time += 0.000001;
        }

        this.frame++;

        this.u(this.time);

        this.counter++;

        this.debugText.setText(this.getdebugMessage());
        //this.game.debug.text('FPS ' + game.time.fps || '--', 32, y, "#00ff00");
    }

    update() {
        //this.counter++;
        this.debugText.setText(this.getdebugMessage());

    }

    getdebugMessage() {
        let out = 'dont worry help is on the way yay!';
        out += '\n window.widthxheight = ' + window.innerWidth + "x" + window.innerHeight;
        out += '\n game.widthxheight = ' + game.config.width + "x" + game.config.height;
        out += '\n game.FPS = ' + game.fps;
        out += '\n counter = ' + myCounter;
        out += '\n connectedUsers = ' + myPacket.connectedUsers;
        out += '\n message = ' + myPacket.message;
        //out += '\n msg = ' + myPacket.message;
        out += '\n time = ' + this.time;
        out += '\n frame = ' + this.frame;
        return out;
    }
}