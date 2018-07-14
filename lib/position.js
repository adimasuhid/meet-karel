const STEP = 1
let _x, _y

class Position {
  constructor ({ x, y }) {
    _x = this._ensureWithinBounds(x)
    _y = this._ensureWithinBounds(y)
  }

  coordinates () {
    return { x: _x, y: _y } 
  }

  moveUp () {
    _y = this._ensureWithinBounds(_y - STEP)

    return this.coordinates()
  }

  moveDown () {
    _y = this._ensureWithinBounds(_y + STEP)

    return this.coordinates()
  }

  moveLeft () {
    _x = this._ensureWithinBounds(_x - STEP)

    return this.coordinates()
  }

  moveRight () {
    _x = this._ensureWithinBounds(_x + STEP)

    return this.coordinates()
  }

  _ensureWithinBounds (value) {
    return value < 0 ? 0 : value
  }
}

export default Position
