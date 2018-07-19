const STEP = 1

class Position {
  constructor ({ x, y }) {
    this._x = this._ensureWithinBounds(x)
    this._y = this._ensureWithinBounds(y)
  }

  coordinates () {
    return { x: this._x, y: this._y }
  }

  moveUp () {
    this._y = this._ensureWithinBounds(this._y - STEP)

    return this.coordinates()
  }

  moveDown () {
    this._y = this._ensureWithinBounds(this._y + STEP)

    return this.coordinates()
  }

  moveLeft () {
    this._x = this._ensureWithinBounds(this._x - STEP)

    return this.coordinates()
  }

  moveRight () {
    this._x = this._ensureWithinBounds(this._x + STEP)

    return this.coordinates()
  }

  type () {
    return "position" 
  }

  _ensureWithinBounds (value) {
    return value < 0 ? 0 : value
  }
}

export default Position
