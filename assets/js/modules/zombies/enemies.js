Quintus.ZombiesEnemies = function (Q) {

    /**
     * Types of zombies
     */
    Q.zombieTypes = {
        basic: {
             asset:'zombie1.png', // Image file
                vx:-8, // Speed
            damage:1,
        },
        skelleton: {
             asset:'zombie2.png', // Image file
                vx:-10, // Speed
            damage:1,
        },
        chicken: {
             asset:'chicken.png', // Image file
                vx:-20, // Speed
            damage:0.5,
        },
        hatzombie: {
             asset:'zombie3.png', // Image file
                vx:-9, // Speed
            damage:1,
        }
    }
    /**
     * Create 'class'
     */
    Q.Sprite.extend("Zombie", {
        /**
         * Method constructor
         */
        init: function (p) {
            this._super(p, {
                type: Q.SPRITE_ZOMBIE,
                /**
                 * Collision
                 */
                collisionMask: Q.SPRITE_BULLET | Q.SPRITE_PLANT,
                x:1080 + 60,
            });
            this.p.originalVx = this.p.vx;
            /**
             * Add component
             */
            this.add("2s");
            this.on("bump.left", function(collision) {
                if (collision.obj.isA("Plant")) {
                    if(collision.obj.p.isExploding) {
                        this.p.energy -= collision.obj.p.damage;
                        collision.obj.destroy();
                    } else {                        
                        collision.obj.takeDamage(this.p.damage);
                    }
                }
                /**
                 * Bullet collisio to zombie damage
                 */
                else if(collision.obj.isA("Bullet")) {
                    this.p.energy -= collision.obj.p.damage;
                    collision.obj.destroy();
                }
                this.p.vx = this.p.originalVx;
            });
        },
        /**
         * Function
         * 0) dt = Delta Time, last time execute 'step'
         */
        step: function (dt) {
            if (this.p.x <= 240) {
                this.destroy();
                console.log("The zombies eat you brain!");
                /**
                 * Restart game
                 */
                Q.stageScene("level", { levelData: Q('level').first().p.levelData });
            }
            if(this.p.energy <= 0) {
                this.destroy();
            }
        }
    });
};