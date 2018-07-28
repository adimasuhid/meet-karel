class Game {
  constructor ({resolver, eventLoop, renderer}) {
    this._resolver = resolver
    this._eventLoop = eventLoop
    this._renderer = renderer
  }

  // Setup commands
  resolve (actions) {
    this._renderer.render()
    this._eventLoop.stop()
    this._eventLoop.execute()
    actions.call(this)
  }

  attach (dom) {
    this._renderer.attach(dom)
  }

  // In game commands
  move () {
    this._eventLoop.enqueue(() => {
      this._resolver.move()
      this._renderer.render()
    })
  }

  pickUp () {
    this._eventLoop.enqueue(() => {
      this._resolver.pickUp()
      this._renderer.render()
    })
  }

  putDown () {
    this._eventLoop.enqueue(() => {
      this._resolver.putDown()
      this._renderer.render()
    })
  }

  turnLeft () {
    this._eventLoop.enqueue(() => {
      this._resolver.turnLeft()
      this._renderer.render()
    })
  }

  turnRight () {
    this._eventLoop.enqueue(() => {
      this._resolver.turnRight()
      this._renderer.render()
    })
  }

  isCarrying () {
    this._eventLoop.enqueue(() => {
      this._resolver.isCarrying()
      this._renderer.render()
    })
  }
}

export default Game
