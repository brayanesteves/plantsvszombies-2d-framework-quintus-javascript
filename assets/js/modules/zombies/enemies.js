Quintus.ZombiesEnemies = function (Q) {

    /**
     * Types of zombies
     */
    Q.zombieTypes = {
        basic: {
            asset:'zombie1.png', // Image file
            vx:-8 // Speed
        },
        skelleton: {
            asset:'zombie2.png', // Image file
            vx:-10 // Speed
        },
        chicken: {
            asset:'chicken.png', // Image file
            vx:-20 // Speed
        },
        hatzombie: {
            asset:'zombie3.png', // Image file
            vx:-9 // Speed
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
        step: function (dt) {
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
};