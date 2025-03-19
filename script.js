const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

class ElectroMan {
    constructor() {
        this.x = 100;
        this.y = 200;
        this.width = 30;
        this.height = 50;
        this.speed = 5;
        this.color = "blue";
    }

    move(direction) {
        if (direction === 'left') this.x -= this.speed;
        if (direction === 'right') this.x += this.speed;
        if (direction === 'up') this.y -= this.speed;
        if (direction === 'down') this.y += this.speed;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const player = new ElectroMan();
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") player.move("left");
    if (event.key === "ArrowRight") player.move("right");
    if (event.key === "ArrowUp") player.move("up");
    if (event.key === "ArrowDown") player.move("down");
});

gameLoop();
