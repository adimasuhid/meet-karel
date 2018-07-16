class Resolver {
  constructor ({environment}) {
    this._environment = environment
    this._karel = this._environment.karel()
  }

  resolve (actions) {
    actions.call(this)
  }

  move () {
    this._karel.move()
  }

  turnLeft () {
    this._karel.turnLeft()
  }

  turnRight () {
    this._karel.turnRight()
  }

  pickUp () {
    const frontCoord = this._karel.coordinatesAhead()
    const model = this._environment.getModelFromPosition(frontCoord)

    if (model && model.canBePickedUp()) {
      this._karel.pickUp(model) 
    }
  }
}

export default Resolver
