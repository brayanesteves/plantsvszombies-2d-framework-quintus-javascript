window.addEventListener("load", function () {
    /**
     * Module
     * 0) 'Sprite' = Show image
     * 1) 'Scenes' = Show screen
     */
    var Q = window.Q = Quintus({ development: true }).include('Sprites, Scenes, 2D, UI, Touch, ZombiesGUI, ZombiesEnemies, ZombiesGameplay').setup({
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
    Q.SPRITE_GROUND = 32;
    Q.SPRITE_UI     = 64;

    /**
     * Enable touch
     */
    Q.touch(Q.SPRITE_SUN | Q.SPRITE_GROUND | Q.SPRITE_UI);

    Q.scene("level", function (stage) {
        
        /**
         * Scene
         */
        var level = new Q.Level({ levelData: stage.options['levelData'] });
        stage.insert(level);

        /**
         * Character
         */
        var sprite1 = new Q.Zombie(Q._extend({ x: 500, y: 600 }, Q.zombieTypes['basic']));     
        var sprite2 = new Q.Zombie(Q._extend({ x: 500, y: 600 }, Q.zombieTypes['chicken']));        
        var sprite3 = new Q.Zombie(Q._extend({ x: 700, y: 100 }, Q.zombieTypes['basic']));
        var sprite4 = new Q.Zombie(Q._extend({ x: 500, y: 600 }, Q.zombieTypes['hatzombie']));        

        //console.log(sprite4.p);

        stage.insert(level);
        /**
         * Insert Sprite
         */
        stage.insert(sprite1);
        stage.insert(sprite2);
        stage.insert(sprite3);
        stage.insert(sprite4);

        var plant1 = new Q.Plant(Q._extend({ x: 300, y: 600 }, Q.plantTypes['carnivorous']));     
        var plant2 = new Q.Plant(Q._extend({ x: 300, y: 100 }, Q.plantTypes['chilli']));   

        var sidePanel = new Q.SidePanel();
        stage.insert(sidePanel);
    });

    /**
     * Load data
     */
    Q.load("background.png, sun.png, zombie1.png, zombie2.png, zombie3.png, chicken.png, carnivorousplant.png, corn.png, chilli.png, subflower.png", function() {
        Q.state.reset({ sun: 120 });
        /**
         * Loas file 'JSON'
         */
        Q.stageScene('level', { levelData:Q.assets['level1.json'] });
        /**
         * Show image scenes
         */
        //Q.stageScene("level", 2);
        Q.stageScene(  "sun", 1);
        
        /**
         * Item
         */
        /*var sun1 = Q.Sun();
        var sun2 = Q.Sun();
        var sun3 = Q.Sun();
        var sun4 = Q.Sun();
        var sun5 = Q.Sun();*/
        
        
        /**
         * Items
         */
        /*Q.stage(1).insert(sun1);
        Q.stage(1).insert(sun2);
        Q.stage(1).insert(sun3);
        Q.stage(1).insert(sun4);
        Q.stage(1).insert(sun5);*/
        
    });
});