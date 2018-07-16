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

  move () {
    switch (this._direction) {
      case 'N':
        this._position.moveUp()
        break
      case 'S':
        this._position.moveDown()
        break
      case 'W':
        this._position.moveLeft()
        break
      case 'E':
        this._position.moveRight()
        break
      default:
        throw new Error('No direction is added!')
    }
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
    }
  }

  putDown () {
    this._bag = null
  }

  isCarrying (object) {
    return !!this._bag
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
