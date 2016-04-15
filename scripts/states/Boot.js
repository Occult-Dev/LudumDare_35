var GameTemplate = {
   
   SCORE: 0
   
};

GameTemplate.BOOT = function ( game ){};

GameTemplate.BOOT.prototype = {

   init: function () {
   
      // KEEP GAME RUNNING IN BACKGROUND
      // this.stage.disableVisibilityChange = true;
      
      this.input.maxPointers = 1;
      
      // Scale The Game
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
      if ( this.game.device.desktop ){ // Desktop specific settings
         
         // scale settings:
         game.scale.setMinMax( 720, 405, 720, 405 );
         
         this.scale.pageAlignHorizontally = true;
         this.scale.pageAlignVertically = true;
         
         this.scale.updateLayout( true );
         
         document.getElementsByTagName( 'canvas' )[0].style.boxShadow = '5px 5px 7px #333';
      
      }else{ // Mobile specific settings.
         
         // scale settings:
         game.scale.setMinMax( 720, 405, 720, 405 );
         
         this.scale.forceLandscape = true;
         
         this.scale.pageAlignHorizontally = true;
         this.scale.pageAlignVertically = true;
         
         this.scale.updateLayout( true );
      
      }
      
      this.game.stage.backgroundColor = "#444";
   
   },
   
   preload: function () {
   
      this.load.image( 'preloadBarOUT', 'media/images/preloaderBarOUTLINE.png' );
      this.load.image( 'preloadBarIN', 'media/images/preloaderBarFILL.png' );
   
   },
   
   create: function () {
   
      game.state.start( 'LOAD' );
   
   }

};