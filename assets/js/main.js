window.addEventListener("load", function () {
    /**
     * Module
     * 0) 'Sprite' = Show image
     * 1) 'Scenes' = Show screen
     */
    var Q = window.Q = Quintus({ development: true }).include('Sprites', 'Scenes').setup({
             width:1080,
            height:720,
        scaleToFit:true
    });

    /**
     * Create 'class'
     */
    Q.Sprite.extend("Zombie", {
        /**
         * Method constructor
         */
        init: function(p) {
            this._super(p, {
                asset:"zombie1.png"
            });
        }
    });

    Q.scene("level", function (stage) {
        
        /**
         * Scene
         */
        var sprite1 = new Q.Sprite({
            x: 1080/2,
            y: 720/2,
            asset:"background.png"
        });

        /**
         * Character
         */
        var sprite2 = new Q.Zombie({
            x: 500,
            y: 600
        });
        
        var sprite3 = new Q.Zombie({
            x: 700,
            y: 100
        });

        var sprite4 = new Q.Zombie({
            x: 700,
            y: 600
        });

        /**
         * Insert Sprite
         */
        stage.inser(sprite1);
        stage.inser(sprite2);
        stage.inser(sprite3);
        stage.inser(sprite4);
    });

    /**
     * Load data
     */
    Q.load("background.png, sun.png, zombie1.png", function() {
        /**
         * Show image scenes
         */
        Q.stageScene("level");
    });
});