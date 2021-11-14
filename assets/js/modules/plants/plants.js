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
                       energy:10, 
                    isShooter: true,
            shootingFrequency:3,
                       damage:2,
        },
        corn: {
                     asset:'corn.png',
                      cost:150,
                    energy:10, 
                 isShooter: true,
         shootingFrequency:3,
                    damage:3,
        },
        chilli: {
                        asset:'chilli.png',
                         cost:50,
                       energy:10, 
                  isExploding: true,
                       damage:50,
        },
        sunflower: {
                    asset:'subflower.png',
                     cost: 75,
                   energy:15, 
                isShooter: true,        
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

    Q.Sprite.extend({
        init: function(p) {
            this._super(p, {
                 type:Q.SPRITE_BULLET,
                asset:'bullet.png',
                   vx:300
            });
            this.add("2d");
            /**
             * Init timer for shooters
             */
            if(this.p.isShooter) {
                this.p.timeToShoot = this.p.shootingFrequency
            }
        },
        step: function(dt) {
            /**
             * Shooters plants
             */
            if(this.p.isShooter) {
                this.p.timeToShoot -= dt;
                if(this.p.timeToShoot <= 0) {
                    this.p.timeToShoot = this.p.shootingFrequency;
                    /**
                     * Create new bullet
                     */
                    this.stage.insert(new Q.Bullet({
                             x: this.p.x,
                             y: this.p.y,
                        damage:this.p.damage
                    }));
                }
            }
            /**
             * Destroy if out of range
             */
            if(this.p.x >= 1110) {
                this.destroy();
            }
        }
    });
};