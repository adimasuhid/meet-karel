import Position from './position.js'

class Boulder {
  constructor ({x, y}) {
    this._position = new Position({x, y})
  }

  coordinates () {
    return this._position.coordinates()
  }

  canBePickedUp () {
    return true
  }
}

export default Boulder
