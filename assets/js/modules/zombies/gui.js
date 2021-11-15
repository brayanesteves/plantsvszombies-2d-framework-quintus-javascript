Quintus.ZombiesGUI = function (Q) {
    /**
     * User interface
     * Container
     */
   Q.UI.Container.extend("SidePanel", {
        /**
         * Method constructor
         */
        init: function(p) {
            this._super(Q._defaults(p, {
                fill: '#E1DEB7',
                    x:120/2,
                    y:720/2,
                radius:0,
                border:0,
                shadow:0,
                    w:120,
                    h:720,
            }));
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
           
           /**
            * Update sun stats when player sun changes
            */
            var panel = this;
            Q.state.on("change.sun", function() {
                Q('SidePanel', 0).items[0].refreshStats();
            });
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
            /**
             * Start showing the correct stats
             */
            //this.stage.insert(this.totalSun);
            this.refreshStats();

            /**
             * Insert plant type buttons
             */
            var x = 40, y = 180, planObject;
            Q.each(this.p.plantTypes, function(element, index, list) {
                planObject = Q.plantTypes[element];
                this.stage.insert(new Q.PlantButton({ x: x, y: y, asset: plantObject.asset, plant: plantObject }));
                this.stage.insert(new Q.UI.Text({ x: x + 40, y: y, label: plantObject.cost + '' }));
                y += 90;
            }, this);
        },
        refreshStats: function () {
            this.totalSun.p.label = Q.state.get("sun") + "";
        }
   });
    
   /**
    * Panel items
    */
    Q.UI.Button.extend("PlantButton", {
        init: function(p) {
            this._super(Q._defaults(p, {
                scale: 0.6
            }), function() {                
                var plantButtons = Q("PlantButton").items;
                Q.each(plantButtons, function(element, index, list) {
                    element.trigger("unselected");
                }, this);
                this.p.opacity = 0.5;
                Q.state.set("currentPlant", this.p.plant);
            });

            this.on("unselected", function() {
                this.p.opacity = 1;
            });
        }
    });
};