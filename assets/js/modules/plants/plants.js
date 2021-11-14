Quintus.ZombiesPlants = function(Q) {
    Q.Sprite.extend("Sun", {
        /**
         * Method constructor
         */
        init: function(p) {
            this._super(p, {
                             asset:"sun.png",
                              type:Q.SPRITE_SUN,
                                 y:-120,
                                 x:300 + Math.random() * (1080 - 360),
                                vy:80,
                            finalY: 60 + Math.random() * (720 - 60),
                   expiractionTime:3
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
        },
        step: function(dt) {
            if(this.p.y >= this.p.finalY) {
                this.p.vy               = 0;

                this.p.expiractionTime -= dt;

                /**
                 * Sun destroy
                 */
                if(this.p.expiractionTime <= 0) {
                    this.destroy();
                }
            }
        }
    });

    /**
     * Plant types
     */
    Q.plantTypes = {
        carnivorous: {
             asset:'carnivorousplant.png',
              cost:100,
            energy:10
        },
        corn: {
            asset:'corn.png',
             cost:150,
           energy:10
        },
        chilli: {
            asset:'chilli.png',
             cost:50,
           energy:10
        },
        sunflower: {
            asset:'subflower.png',
             cost: 75,
           energy:15
       },
    };

    /**
     * Plan
     */
    Q.Sprite.extend("Plant", {
        init: function(p) {
            this._super(p, {
                type:Q.SPRITE_PLANT,
            });
            this.add("2d");
        },
        step: function(dt) {
            if(this.p.energy <= 0) {
                this.destroy();
            }
        },
        takeDamage: function(damage) {
            this.p.energy -= damage / 50;
            //console.log(this.p.damage);
        }
    });
};