'use strict';
 
let canvas;
let ctx;
 
let map = [
	[11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12],
    [13,14,13,14,15,16,15,16,15,16,15,16,15,16,15,16,15,16,15,16,13,14,13,14],
    [11,12,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,11,12],
    [13,14,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16,13,14],
    [11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12],
    [13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14],
    [11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12],
    [13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,13,14],
    [11,12,3,0,0,0,0,0,0,0,17,0,0,0,0,17,0,0,0,0,3,0,11,12],
    [13,14,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,13,14],
    [11,12,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,11,12],
    [13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14],
    [11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12],
    [13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,13,14],
    [11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12],
    [13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14],
    [11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12],
    [13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,13,14],
    [11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,11,12],
    [13,14,1,2,0,3,3,3,17,0,0,0,0,0,0,0,0,0,1,2,13,14,13,14],
    [11,12,11,12,0,3,3,3,0,0,0,0,0,0,0,0,0,0,11,12,11,12,11,12],
    [13,14,13,14,1,2,1,2,1,2,1,2,1,2,1,2,1,2,13,14,13,14,13,14],
	[11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12],
    [13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14],
]
 

class Sprite {
	constructor( img, left, top ) {
		this.left = 0;
    	this.top = 0;
		this.img = new Image();
		this.img.src = img;
		this.width = 24;
		this.height = 24;
	}
}
 
class Game {
	constructor( width, height ) {
		this.width = width;
		this.height = height;
 
		canvas = document.getElementById( 'canvas' );
		canvas.width = this.width;		
		canvas.height = this.height;		
 
		ctx = canvas.getContext( '2d' );
	}
	add( sprite, x, y ) {
		if ( typeof x === "undefined" ) sprite.x = 0;
		else sprite.x = x;
		if ( typeof y === "undefined" ) sprite.y = 0;
		else sprite.y = y;
		ctx.drawImage( sprite.img, sprite.left, sprite.top, sprite.width, sprite.height, sprite.x, sprite.y ,sprite.width, sprite.height );
	}
}
 
class Input {
	constructor() {
		this.up = false;
		this.left = false;
		this.down = false;
		this.right = false;
	}
	push_key() {
		addEventListener( "keydown", () => {
			const key_code = event.keyCode;
			if( key_code === 37 ) this.left = true;
			if( key_code === 38 ) this.up = true;
			if( key_code === 39 ) this.right = true;
			if( key_code === 40 ) this.down = true;
			event.preventDefault();		
		}, false);
		addEventListener( "keyup", () => {
			const key_code = event.keyCode;
			if( key_code === 37 ) this.left = false;
			if( key_code === 38 ) this.up = false;
			if( key_code === 39 ) this.right = false;
			if( key_code === 40 ) this.down = false;
		}, false);
	}
}
let input = new Input();
 
class Player {
	constructor(x, y) {
		this.sprite = new Sprite( 'img/Trainer1.4.png' );
		this.x = x;
		this.y = y;
		this.move = 0;
	}
	move_sp() {
		input.push_key();
		game.add( this.sprite, this.x, this.y );
		if ( this.move === 0 ) {
			if ( input.left === true ) {
                this.sprite  = new Sprite('img/Trainer4.4.png' );
                var sprite = this.sprite
				var x = this.x/24;
				var y = this.y/24;
                if(x >= 1){
                    if (map[y][x - 1] < 10 ) {
                        this.move = 24;
                        input.push = 'left';
                    }
                }
            }
			if ( input.up === true ) {
                this.sprite = new Sprite('img/Trainer2.4.png' );
                var sprite = this.sprite
				var x = this.x/24;
				var y = this.y/24;
				if (y >= 1) {
					if ( map[y - 1][x] < 10 ) {
						this.move = 24;
						input.push = 'up';
					}
				}
			}
			if ( input.right === true ) {
                this.sprite = new Sprite('img/Trainer3.4.png' );
                var sprite = this.sprite
				var x = this.x/24;
				var y = this.y/24;
				if(x <= 24){
                    if ( map[y][x + 1] < 10 ) {
                        this.move = 24;
                        input.push = 'right';
                    }
                }
			}
			if ( input.down === true ) {
                this.sprite = new Sprite('img/Trainer1.4.png' );
                var sprite = this.sprite
				var x = this.x/24;
				var y = this.y/24;
				if (y <= 24) {
					if ( map[y + 1][x] < 10 ) {
						this.move = 24;
						input.push = 'down';
					}
				}
			}
		}
 
		if (this.move > 0) {
			this.move = this.move - 4;
			if ( input.push === 'left' ) this.x = this.x - 4;
			if ( input.push === 'up' ) this.y = this.y -4;
			if ( input.push === 'right' ) this.x = this.x + 4;
			if ( input.push === 'down' ) this.y = this.y + 4;
		}
	}
}
 
let game = new Game( 576, 576 );
 
let player = new Player( 240,240 );
 

let Tree1 = new Sprite( 'img/Tree1.2.png');
let Tree2 = new Sprite( 'img/Tree2.2.png');
let Tree3 = new Sprite( 'img/Tree3.2.png');
let Tree4 = new Sprite( 'img/Tree4.2.png');
let Tree5 = new Sprite( 'img/Tree5.1.png');
let Tree6 = new Sprite( 'img/Tree6.1.png');
let Tree7 = new Sprite( 'img/Tree7.1.png');
let Tree8 = new Sprite( 'img/Tree8.1.png');


let Floor1 = new Sprite('img/Floor1.2.png');

let Flower1 = new Sprite('img/Flower1.1.png');

let Board1 = new Sprite('img/Board1.1.png');

 
function main() {
	ctx.fillStyle = "rgb( 82, 196, 197 )";
	ctx.fillRect(0, 0, 576, 576);
 
	for (var y=0; y<map.length; y++) {
		for (var x=0; x<map[y].length; x++) {
			if ( map[y][x] === 11 ) game.add( Tree1, 24*x, 24*y );
			if ( map[y][x] === 12 ) game.add( Tree2, 24*x, 24*y );
			if ( map[y][x] === 13 ) game.add( Tree3, 24*x, 24*y );
			if ( map[y][x] === 14 ) game.add( Tree4, 24*x, 24*y );
			if ( map[y][x] === 1 ) game.add( Tree5, 24*x, 24*y );
			if ( map[y][x] === 2 ) game.add( Tree6, 24*x, 24*y );
            if ( map[y][x] === 15 ) game.add( Tree7, 24*x, 24*y );
			if ( map[y][x] === 16 ) game.add( Tree8, 24*x, 24*y );
            
            if ( map[y][x] === 3 ) game.add( Flower1, 24*x, 24*y );

            if ( map[y][x] === 17 ) game.add( Board1, 24*x, 24*y );


            if ( map[y][x] == 0) game.add(Floor1, 24*x+ 0.5,24*y+ 0.5);

		}
	}
 
	player.move_sp();
 
	requestAnimationFrame( main );
}
addEventListener('load', main(), false);
