import Position from './position.js'

const DIRECTIONS = {
  E: 0,
  N: 90,
  W: 180,
  S: 270
}
const DIRECTION_ANGLE = 90
const FULL_CIRCLE_ANGLE = 360

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
    this._turn(DIRECTION_ANGLE)
  }

  turnRight () {
    this._turn(-1 * DIRECTION_ANGLE)
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
      case 'N':
        position.moveUp()
        break
      case 'S':
        position.moveDown()
        break
      case 'W':
        position.moveLeft()
        break
      case 'E':
        position.moveRight()
        break
      default:
        throw new Error('No direction is added!')
    }
  }

  _turn (angle) {
    let turnedAngle = DIRECTIONS[this._direction] + angle
    turnedAngle = this._mod(turnedAngle, FULL_CIRCLE_ANGLE)

    this._direction = this._keyByValue(DIRECTIONS, turnedAngle)
  }

  _keyByValue (obj, val) {
    return Object.keys(obj)[Object.values(obj).indexOf(val)]
  }

  _mod (n, m) {
    return ((n % m) + m) % m
  }
}

export default Karel
