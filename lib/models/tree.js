import Position from './position.js'
import Direction from './direction.js'

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

  mobile () {
    return false
  }

  type () {
    return 'tree'
  }

  direction () {
    return Direction.CARDINAL.S
  }
}

export default Tree
