const PIXEL_TO_COORD = 50

// TODO : namespace to canvas
class Canvas {
  constructor({board}) {
    this._board = board 
    this._canvas = this._createCanvas(board)
  }

  attach (dom) {
    dom.appendChild(this._canvas)
  }

  _createCanvas (board) {
    var canvas = document.createElement('canvas')
    canvas.id = "game-canvas"
    canvas.width = board.width() * PIXEL_TO_COORD
    canvas.height = board.height() * PIXEL_TO_COORD
    canvas.style.zIndex = 8
    canvas.style.position = "absolute"
    canvas.style.border = "1px solid"

    return canvas
  }
}

export default Canvas
