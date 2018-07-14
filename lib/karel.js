const STEP = 1
const DIRECTIONS = {
  E: 0,
  N: 90,
  W: 80,
  S: 270
}

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
}

export default Karel
