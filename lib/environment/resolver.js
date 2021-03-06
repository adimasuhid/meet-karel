class Resolver {
  constructor ({board}) {
    this._board = board
    this._karel = this._board.karel()
  }

  resolve (actions) {
    actions.call(this)
  }

  setBoard (board) {
    this._board = board
    this._karel = board.karel()
  }

  move () {
    const model = this._getModelAhead()

    if (model) { return }

    this._karel.move()
  }

  turnLeft () {
    this._karel.turnLeft()
  }

  turnRight () {
    this._karel.turnRight()
  }

  pickUp () {
    const model = this._getModelAhead()

    if (!this.isCarrying()) {
      this._karel.pickUp(model)
    }
  }

  putDown () {
    const frontCoord = this._karel.coordinatesAhead()
    const model = this._getModelAhead()

    if (!model) {
      this._karel.putDown(frontCoord)
    }
  }

  isCarrying () {
    return this._karel.isCarrying()
  }

  inFront () {
    const model = this._getModelAhead()

    if (!model) { return }

    return model.type()
  }

  _getModelAhead () {
    const frontCoord = this._karel.coordinatesAhead()
    const model = this._board.getModelFromPosition(frontCoord)

    return model
  }
}

export default Resolver
