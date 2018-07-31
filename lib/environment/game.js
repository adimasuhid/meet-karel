import _ from 'lodash'

class Game {
  constructor ({resolver, eventLoop, renderer}) {
    this._resolver = resolver
    this._eventLoop = eventLoop
    this._renderer = renderer
    this._initialBoard = _.cloneDeep(resolver._board)
  }

  // Setup commands
  resolve (actions) {
    this._renderer.render()
    this._eventLoop.stop()
    this._eventLoop.execute()
    actions.call(this)
  }

  stop () {
    this._eventLoop.stop()
    this._eventLoop.clear()
  }

  reset () {
    this.stop()
    this._resetBoard()
    this.render()
  }

  attach (dom) {
    this._renderer.attach(dom)
  }

  addAssetSource (dom) {
    this._renderer.addAssetSource(dom)
  }

  render () {
    this._renderer.render()
  }

  // In game commands
  move () {
    this._resolver.move()
    this._render()
  }

  pickUp () {
    this._resolver.pickUp()
    this._render()
  }

  putDown () {
    this._resolver.putDown()
    this._render()
  }

  turnLeft () {
    this._resolver.turnLeft()
    this._render()
  }

  turnRight () {
    this._resolver.turnRight()
    this._render()
  }

  isCarrying () {
    return this._resolver.isCarrying()
  }

  inFront () {
    return this._resolver.inFront()
  }

  _resetBoard () {
    const newBoard = _.cloneDeep(this._initialBoard)
    this._resolver.setBoard(newBoard)
    this._renderer.setBoard(newBoard)
  }

  _render () {
    const currentBoard = _.cloneDeep(this._resolver._board)
    this._eventLoop.enqueue(() => {
      this._renderer.setBoard(currentBoard)
      this._renderer.render()
    })
  }
}

export default Game
