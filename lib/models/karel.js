import Position from './position.js'
import Direction from './direction.js'

class Karel {
  constructor ({x, y, direction}) {
    this._position = new Position({x, y})
    this._direction = direction
    this._bag = null
  }

  // TODO: this will be implemented into other objects. Move to a module
  coordinates () {
    return this._position.coordinates()
  }

  direction () {
    return this._direction
  }

  coordinatesAhead () {
    const position = new Position(this._position.coordinates())

    this._movePosition(position)

    return position.coordinates()
  }

  move () {
    this._movePosition(this._position)
  }

  turnLeft () {
    this._turn(Direction.TURN_ANGLE)
  }

  turnRight () {
    this._turn(-1 * Direction.TURN_ANGLE)
  }

  pickUp (object) {
    if (object && object.canBePickedUp()) {
      this._bag = object
      this._bag.pickUp()
    }
  }

  putDown (coord) {
    if (this.isCarrying()) {
      this._bag.putDown(coord)
      this._bag = null
    }
  }

  isCarrying () {
    return !!this._bag
  }

  type () {
    return 'karel'
  }

  _movePosition (position) {
    switch (this._direction) {
      case Direction.CARDINAL.N:
        position.moveUp()
        break
      case Direction.CARDINAL.S:
        position.moveDown()
        break
      case Direction.CARDINAL.W:
        position.moveLeft()
        break
      case Direction.CARDINAL.E:
        position.moveRight()
        break
      default:
        throw new Error('No direction is added!')
    }
  }

  _turn (angle) {
    let turnedAngle = Direction.ANGLES[this._direction] + angle
    turnedAngle = this._mod(turnedAngle, Direction.FULL_CIRCLE_ANGLE)

    this._direction = this._keyByValue(Direction.ANGLES, turnedAngle)
  }

  _keyByValue (obj, val) {
    return Object.keys(obj)[Object.values(obj).indexOf(val)]
  }

  _mod (n, m) {
    return ((n % m) + m) % m
  }
}

export default Karel
