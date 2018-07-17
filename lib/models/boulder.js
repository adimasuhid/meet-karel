import Position from './position.js'

class Boulder {
  constructor ({x, y}) {
    this._position = new Position({x, y})
    this._inPlace = true
  }

  coordinates () {
    return this._position.coordinates()
  }

  canBePickedUp () {
    return true
  }

  isPickedUp () {
    return !this._inPlace
  }

  // TODO: Should we remove the position on pickup?
  pickUp () {
    this._inPlace = false
  }

  putDown (coord) {
    if (!this.isPickedUp()) { return }

    this._position = new Position(coord)
    this._inPlace = true
  }
}

export default Boulder
