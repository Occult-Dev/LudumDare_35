GameTemplate.LOAD = function( game ){};

GameTemplate.LOAD.prototype = {
   
   init: function(){
      
      this.preloadBar1 = this.add.sprite( game.world.centerX, game.world.centerY, 'preloadBarOUT' );
         this.preloadBar1.anchor.set( 0.5 );
         this.preloadBar1.scale.setTo( 5 );
      this.preloadBar2 = this.add.sprite( game.world.centerX, game.world.centerY, 'preloadBarIN' );
         this.preloadBar2.anchor.set( 0.5 );
         this.preloadBar2.scale.setTo( 5 );
      this.load.setPreloadSprite( this.preloadBar2 );
      
   },
   
   preload: function(){
      
      
   
   },
   
   create: function(){
   
      game.state.start( 'GAME' );
   
   }

};