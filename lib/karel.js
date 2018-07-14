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

  _turn (angle) {
    let newDirection = DIRECTIONS[this.direction] + angle
    newDirection = newDirection % FULL_CIRCLE_ANGLE

    this.direction = this._keyByValue(DIRECTIONS, newDirection)
  }

  _keyByValue (obj, val) {
    return Object.keys(obj)[Object.values(obj).indexOf(val)];
  }
}

export default Karel
