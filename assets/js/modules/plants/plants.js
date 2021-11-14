Quintus.ZombiesPlants = function(Q) {
    Q.Sprite.extend("Sun", {
        /**
         * Method constructor
         */
        init: function(p) {
            this._super(p, {
                asset:"sun.png",
                 type:Q.SPRITE_SUN,
                    y:400,
                    x:300 + Math.random() * (1080 - 360)
            });

            this.add("2d");

            /**
             * Listening event "touch"
             */
            this.on("touch");
        },
        touch: function(touch) {
            console.log(touch);
            console.log("Touching sun");
            Q.state.inc("sun", 25);
            this.destroy();
        }
    });
};