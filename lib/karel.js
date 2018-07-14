import Position from './position.js'

const DIRECTIONS = {
  E: 0,
  N: 90,
  W: 180,
  S: 270
}
const DIRECTION_ANGLE = 90
const FULL_CIRCLE_ANGLE = 360

let _position, _direction, _bag

class Karel {
  constructor ({x, y, direction}) {
    
    _position = new Position({ x: x, y: y })
    _direction = direction
    _bag = null
  }

  // TODO: this will be implemented into other objects. Move to a module
  coordinates () {
    return _position.coordinates() 
  }

  direction () {
    return _direction 
  }

  move () {
    switch (_direction) {
      case 'N':
        _position.moveUp()
        break
      case 'S':
        _position.moveDown()
        break
      case 'W':
        _position.moveLeft()
        break
      case 'E':
        _position.moveRight()
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
    let turnedAngle = DIRECTIONS[_direction] + angle
    turnedAngle = this._mod(turnedAngle, FULL_CIRCLE_ANGLE)

    _direction = this._keyByValue(DIRECTIONS, turnedAngle)
  }

  _keyByValue (obj, val) {
    return Object.keys(obj)[Object.values(obj).indexOf(val)];
  }

  _mod (n, m) {
    return ((n % m) + m) % m
  }
}

export default Karel
