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
    // what's in front of you karel
    // if can be picked up
    // pick it up
  }
}

export default Resolver
