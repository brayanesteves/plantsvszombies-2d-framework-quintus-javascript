window.addEventListener("load", function () {
    /**
     * Module
     * 0) 'Sprite' = Show image
     * 1) 'Scenes' = Show screen
     */
    var Q = window.Q = Quintus({ development: true }).include('Sprites', 'Scenes', '2D').setup({
             width:1080,
            height:720,
        scaleToFit:true
    });

    /**
     * Turn off gravity
     */
    Q.gravityX = 0;
    Q.gravityY = 0;

    /**
     * Contants
     */
    Q.SPRITE_SUN    = 2;
    Q.SPRITE_ZOMBIE = 4;
    Q.SPRITE_PLANT  = 8;
    Q.SPRITE_BULLET = 16;
    Q.SPRITE_GROUND = 2;

    /**
     * Create 'class'
     */
    Q.Sprite.extend("Zombie", {
        /**
         * Method constructor
         */
        init: function(p) {
            this._super(p, {
                asset:"zombie1.png",
                 type:Q.SPRITE_ZOMBIE,
                /**
                 * Collision
                 */
                collisionMask: Q.SPRITE_BULLET | Q.SPRITE_PLANT,
                  vx: -30
            });
            /**
             * Add component
             */
            this.add("2s");
        },
        /**
         * Function
         * 0) dt = Delta Time, last time execute 'step'
         */
        step: function(dt) {
            if (this.p.x <= 240) {
                this.destroy();
                console.log("The zombies eat you brain!");
                /**
                 * Restart game
                 */
                Q.stageScene("level");
            }
        }
    });

    Q.scene("level", function (stage) {
        
        /**
         * Scene
         */
        var sprite1 = new Q.Sprite({
            x: 1080/2,
            y: 720/2,
            asset:"background.png",
            type:Q.SPRITE_GROUND
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

        console.log(sprite4.p);

        /**
         * Insert Sprite
         */
        stage.insert(sprite1);
        stage.insert(sprite2);
        stage.insert(sprite3);
        stage.insert(sprite4);
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