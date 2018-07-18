class Game {
  constructor ({resolver, eventLoop}) {
    this._resolver = resolver
    this._eventLoop = eventLoop
  }

  resolve (actions) {
    this._eventLoop.stop()
    this._eventLoop.execute()
    actions.call(this) 
  }

  move () {
    this._eventLoop.enqueue(this._resolver.move.bind(this._resolver)) 
  }

  pickUp () {
    this._eventLoop.enqueue(this._resolver.pickUp.bind(this._resolver)) 
  } 

  putDown () {
    this._eventLoop.enqueue(this._resolver.putDown.bind(this._resolver)) 
  } 

  turnLeft () {
    this._eventLoop.enqueue(this._resolver.turnLeft.bind(this._resolver)) 
  } 

  turnRight () {
    this._eventLoop.enqueue(this._resolver.turnRight.bind(this._resolver)) 
  } 

  isCarrying () {
    this._eventLoop.enqueue(this._resolver.isCarrying.bind(this._resolver)) 
  } 
}

export default Game
