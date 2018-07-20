import Position from './position.js'

class Tree {
  constructor ({x, y}) {
    this._position = new Position({x, y})
  }

  coordinates () {
    return this._position.coordinates()
  }

  canBePickedUp () {
    return false
  }

  type () {
    return 'tree'
  }
}

export default Tree
