Quintus.ZombiesGameplay = function(Q) {
    Q.Sprite.extend('Level', {
        init: function(p) {
            this._super(p, {
                       asset: 'background.png',
                        type: Q.SPRITE_GROUND,
                           x: 120 + 960 / 2,
                           y: 720 / 2,
                           w: 960,
                           h:720,
                sunFrequency: { min:1, max:5 }
            });
            this.timeNextSun = this.getTimeNextSun();

            /**
             * Level data
             */
            this.zombieIndex = 0; // Current 'index' from zombies 'array'
            this.numZombies  = this.p.levelData.zombies.length;
            this.levelTime   = 0; // Keep track of the level duration 



            this.on('touch');
        },
        touch: function(touch) {
            console.log('you touched the ground');
        },
        step: function (dt) {
            /**
             * Update level duration
             */
            this.levelTime += dt;

            if(this.levelTime >= this.p.levelData.duration) {
                console.log("LEVEL COMPLETED!");
            }

            /**
             * Create zombies at the defined times
             */
            if(this.zombieIndex < this.zombieIndex) {
                var currentZombie = this.p.levelData.zombies[this.zombieIndex];
                if(this.levelTime >= currentZombie.time) {
                    var zombieData = Q.zombieTypes[currentZombie.type];
                    var  newZombie = new Q.Zombie(Q._extend(zombieData, { y: currentZombie.now * 120 + 60 }));
                    this.stage.insert(newZombie);
                    this.zombieIndex++;
                }
            }
            /**
             * Update sun generation timing
             */
            this.timeNextSun -= dt;
            if(this.timeNextSun <= 0) {
                this.timeNextSun = 2;
                console.log("New sun");
                Q.stage(1).insert(new Q.Sun());
            }
        },
        getTimeNextSun: function() {
            return this.p.sunFrequency.min + Math.random() * (this.p.sunFrequency.max - this.p.sunFrequency.min);
        }
    });
};