window.addEventListener("load", function () {
    /**
     * Module
     * 0) 'Sprite' = Show image
     * 1) 'Scenes' = Show screen
     */
    var Q = window.Q = Quintus({ development: true }).include('Sprites, Scenes, 2D, UI').setup({
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

    /**
     * User interface
     * Container
     */
    Q.UI.Container.extend("SidePanel", {
        /**
         * Method constructor
         */
        init: function() {
            this._super({
                  fill: '#E1DEB7',
                     x:120/2,
                     y:720/2,
                radius:0,
                border:0,
                shadow:0,
                     w:120,
                     h:720,
            });
            /**
             * inserted: function() {
             *   var sun = new Q.Sprite({
             *       asset: 'sun.png',
             *       x: 60,
             *       y: 40
             *   });
             *   this.stage.insert(sun);
             * }
             */
            this.on("inserted");
        },
        inserted: function() {
            var sun = new Q.Sprite({
                asset: 'sun.png',
                x: 60,
                y: 40
            });
            /**
             * Image
             */
            this.stage.insert(sun);
            /**
             * Text
             */
            this.totalSun = new Q.UI.Text({
                    x: 60,
                    y: 100,
                label:"100"
            });
            this.stage.insert(this.totalSun);
        }
    });

    Q.scene("level", function (stage) {
        
        /**
         * Scene
         */
        var sprite1 = new Q.Sprite({
                x: 120 + 960/2,
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

        var sidePanel = new Q.SidePanel();
        stage.insert(sidePanel);
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