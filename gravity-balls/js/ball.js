class Ball {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.ballSize = { w: 50, h: 50 }
        this.ballPos = { x: 0, y: 0 }
        this.ballVel = { x: 10, y: 1 }
        this.physics = { gravity: .4 }
        this.canvasSize = canvasSize
        this.ballImage = 'img/basketball.png'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.ballImage
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballVel.y += this.physics.gravity

        this.ballPos.x += this.ballVel.x
        this.ballPos.y += this.ballVel.y

        if (this.ballPos.y >= this.canvasSize.h - this.ballSize.h) {
            this.ballVel.y *= -1
        }

        if (this.ballPos.x >= this.canvasSize.w - this.ballSize.w) {
            this.ballVel.x *= -1
        }
    }
}