window.addEventListener("load", function () {
    /**
     * Module
     * 0) 'Sprite' = Show image
     * 1) 'Scenes' = Show screen
     */
    var Q = window.Q = Quintus({ development: true }).include('Sprites, Scenes, 2D, UI, ZombiesGUI, ZombiesEnemies').setup({
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
     * Enable touch
     */
    Q.touch(Q.SPRITE_SUN);

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
         * Item
         */
        var sun1 = Q.Sun();
        var sun2 = Q.Sun();
        var sun3 = Q.Sun();
        var sun4 = Q.Sun();
        var sun5 = Q.Sun();

        /**
         * Character
         */
        var sprite2 = new Q.Zombie(Q._extend({ x: 500, y: 600 }, Q.zombieTypes['chicken']));        
        var sprite3 = new Q.Zombie(Q._extend({ x: 700, y: 100 }, Q.zombieTypes['basic']));
        var sprite4 = new Q.Zombie(Q._extend({ x: 500, y: 600 }, Q.zombieTypes['hatzombie']));        

        //console.log(sprite4.p);

        /**
         * Insert Sprite
         */
        stage.insert(sprite1);
        stage.insert(sprite2);
        stage.insert(sprite3);
        stage.insert(sprite4);

        /**
         * Items
         */
        stage.insert(sun1);
        stage.insert(sun2);
        stage.insert(sun3);
        stage.insert(sun4);
        stage.insert(sun5);

        var sidePanel = new Q.SidePanel();
        stage.insert(sidePanel);
    });

    /**
     * Load data
     */
    Q.load("background.png, sun.png, zombie1.png, zombie2.png, zombie3.png, chicken.png", function() {
        /**
         * Show image scenes
         */
        Q.stageScene("level");
    });
});