import Position from './position.js'
import Direction from './direction.js'

class Boulder {
  constructor ({x, y}) {
    this._position = new Position({x, y})
    this._inPlace = true
  }

  coordinates () {
    return this._position.coordinates()
  }

  mobile () {
    return false
  }

  direction () {
    return Direction.CARDINAL.S
  }

  canBePickedUp () {
    return true
  }

  isPickedUp () {
    return !this._inPlace
  }

  pickUp () {
    // TODO: Position does not know how to process null objects yet
    this._position = new Position({ x: null, y: null })
    this._inPlace = false
  }

  putDown (coord) {
    if (!this.isPickedUp()) { return }

    this._position = new Position(coord)
    this._inPlace = true
  }

  type () {
    return 'boulder'
  }
}

export default Boulder
