import Position from './position.js'

let _position

class Boulder {
  constructor ({x, y}) {
    _position = new Position({x, y})
  }

  coordinates () {
    return _position.coordinates()
  }

  canBePickedUp () {
    return true
  }
}

export default Boulder
