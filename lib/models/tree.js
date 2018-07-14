import Position from './position.js'

let _position

class Tree {
  constructor ({x, y}) {
    _position = new Position({x, y})
  }

  coordinates () {
    return _position.coordinates()
  }

  canBePickedUp () {
    return false
  }
}

export default Tree
