var Entity = function( game ){

   //Phaser.Sprite.call( this, game, game.world.centerX, game.world.centerY, 'sprites', 0 );
   
   //game.add.existing( this );

};

Entity.prototype = Object.create( Phaser.Sprite.prototype );
Entity.prototype.constructor = Entity;

Entity.prototype.update = function(){

   

};