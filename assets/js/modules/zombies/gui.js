Quintus.ZombiesGUI = function (Q) {
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
};