const STEP = 1
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
    this.x = x
    this.y = y
    this.direction = direction
    this.bag = null
  }

  move () {
    switch (this.direction) {
      case 'N':
        this.y = this.y - STEP
        break
      case 'S':
        this.y = this.y + STEP
        break
      case 'W':
        this.x = this.x - STEP
        break
      case 'E':
        this.x = this.x + STEP
        break
      default:
        throw 'No direction is added!'
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
      this.bag = object
    }
  }

  putDown () {
    this.bag = null
  }

  isCarrying (object) {
    return !!this.bag
  }

  _turn (angle) {
    let turnedAngle = DIRECTIONS[this.direction] + angle
    turnedAngle = this._mod(turnedAngle, FULL_CIRCLE_ANGLE)

    this.direction = this._keyByValue(DIRECTIONS, turnedAngle)
  }

  _keyByValue (obj, val) {
    return Object.keys(obj)[Object.values(obj).indexOf(val)];
  }

  _mod (n, m) {
    return ((n % m) + m) % m
  }
}

export default Karel
