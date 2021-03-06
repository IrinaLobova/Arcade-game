// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x; //83 * 2;
    this.y = y; //101 * 4;
    this.velocity = 200;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= ctx.canvas.width || this.x <= -251) {
        this.velocity = -this.velocity;
    }
    this.x += (this.velocity * dt);

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    var img = Resources.get(this.sprite);
    if (this.velocity < 0) {
        ctx.save();
        ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.rotate(180 * Math.PI/180);
        ctx.drawImage(img, -this.x, -this.y + 83);
        ctx.restore();
    } else
        ctx.drawImage(img, this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function() {

}

Player.prototype.handleInput = function(key) {
    switch(key) {
        case "left":
            if (this.x > 0) this.x -= 101; 
            break;
        case "right":
            if (this.x < 101 * 4) 
            this.x += 101;
            break;
        case "up":
            if (this.y > 0)  
            this.y -= 83;
            break;
        case "down":
            if (this.y < 83 * 5) 
            this.y += 83;
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(0, 83 * 3);
var allEnemies = [new Enemy(101 * 4, 83 * 2), new Enemy(101 * 4, 83 * 4)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
