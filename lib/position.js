let _x, _y

class Position {
  constructor ({ x, y }) {
    _x = x
    _y = y
  }

  coordinates () {
    return { x: _x, y: _y } 
  }
}

export default Position
