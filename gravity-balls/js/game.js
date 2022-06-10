const Game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    balls: [],
    keys: {
        SPACE: 'Space'
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init(id) {
        this.canvasDom = document.querySelector(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = event => {
            event.code === this.keys.SPACE && this.createBall()
        }
    },
    createBall() {
        const newBall = new Ball(this.ctx, this.canvasSize)
        this.balls.push(newBall)
        console.log(this.balls)
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 20)
    },
    drawAll() {
        this.balls.forEach(ball => ball.draw())
        this.clearBalls()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    clearBalls() {
        this.balls = this.balls.filter(ball => ball.ballPos.x > 0 - ball.ballSize.w)
    }

}