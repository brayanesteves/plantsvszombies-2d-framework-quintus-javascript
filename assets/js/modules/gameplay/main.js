Quintus.ZombiesGameplay = function(Q) {
    Q.Sprite.extend('Level', {
        init: function(p) {
            this._super(p, {
                asset: 'background.png',
                type: Q.SPRITE_GROUND,
                x: 120 + 960 / 2,
                y: 720 / 2,
                w: 960,
                y:720,
            });
            this.on('touch');
        },
        touch: function(touch) {
            console.log('you touched the ground');
        }
    });
};