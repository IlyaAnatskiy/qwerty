import React, { useRef, useEffect } from 'react'

class GradientAnimation {
  constructor(cnv, ctx) {
    this.cnv = cnv
    this.ctx = ctx

    this.circlesData = [
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
      { color1: 'hsla(222, 91%, 42%, 1)', color2: 'hsla(220, 90%, 34%, 0)' },
      { color1: 'hsla(238, 100%, 6%, 1)', color2: 'hsla(253, 100%, 8%, 0)' },
    ]

    this.circlesNum = 16
    this.minRadius = 400
    this.maxRadius = 400
    this.speed = 0.005
    ;(window.onresize = () => {
      this.setCanvasSize()
      this.createCircles()
    })()
    this.drawAnimation()
  }
  setCanvasSize() {
    this.w = this.cnv.width = window.innerWidth * devicePixelRatio
    this.h = this.cnv.height = window.innerHeight * devicePixelRatio
    this.ctx.scale(devicePixelRatio, devicePixelRatio)
  }
  createCircles() {
    this.circles = []
    for (let i = 0; i < this.circlesNum; ++i) {
      this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius, this.circlesData[i]))
    }
  }
  drawCircles() {
    this.circles.forEach((circle) => circle.draw(this.ctx, this.speed))
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.w, this.h)
  }
  drawAnimation() {
    this.clearCanvas()
    this.drawCircles()
    window.requestAnimationFrame(() => this.drawAnimation())
  }
}

class Circle {
  constructor(w, h, minR, maxR, circleData) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.angle = Math.random() * Math.PI * 2
    this.radius = Math.random() * (maxR - minR) + minR
    this.firstColor = circleData.color1
    this.secondColor = circleData.color2
  }
  draw(ctx, speed) {
    this.angle += speed
    const x = this.x + Math.cos(this.angle) * 200
    const y = this.y + Math.sin(this.angle) * 200
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius)
    gradient.addColorStop(0, this.firstColor)
    gradient.addColorStop(1, this.secondColor)

    ctx.globalCompositeOperation = `overlay`
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

const Canvas = (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    new GradientAnimation(canvas, context)
  }, [canvasRef])

  return <canvas id="canvas" className={`${props.hide ? 'hide' : ''}`} ref={canvasRef} {...props} />
}

export default Canvas
