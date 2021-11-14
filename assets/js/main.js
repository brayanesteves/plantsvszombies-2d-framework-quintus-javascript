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

    Q.scene("level", function (stage) {
        
        /**
         * Scene
         */
        var sprite1 = new Q.Sprite({
            x: 1080/2,
            y: 720/2,
            asset:"background.png"
        });

        stage.inser(sprite1);
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