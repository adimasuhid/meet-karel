import _ from 'underscore'

const PIXEL_TO_COORD = 32

// TODO : namespace to canvas
class Canvas {
  constructor ({board}) {
    this._board = board
    this._canvas = this._createCanvas(board)
    this._context = this._canvas.getContext('2d')
    this._assetDom = null
  }

  attach (dom) {
    dom.appendChild(this._canvas)
  }

  addAssetSource (dom) {
    this._assetDom = dom
  }

  render () {
    // TODO: create floor with tiles

    this._clearScreen()

    for (let y = 0; y < this._board.height(); y++) {
      for (let x = 0; x < this._board.width(); x++) {
        this._renderFloor({x, y})
        const model = this._findModelOnPosition({x, y})

        this._renderModel(model)
      }
    }
  }

  _findModelOnPosition (coord) {
    return _.find(this._board.allModels(), (model) => {
      return _.isEqual(coord, model.coordinates())
    })
  }

  _renderModel (model) {
    if (!model) { return }

    const sprite = this._getSpriteForModel(model)
    const {x, y} = model.coordinates()

    this._context.drawImage(sprite, this._scale(x), this._scale(y))
  }

  _renderFloor ({x, y}) {
    const sprite = this._getSpriteById('#floor_tile')

    this._context.drawImage(sprite, this._scale(x), this._scale(y))
  }

  _getSpriteForModel (model) {
    // TODO: Maybe do this the background way
    const key = `#${model.type()}_${model.direction()}`

    return this._getSpriteById(key)
  }

  _getSpriteById (key) {
    return this._assetDom.querySelector(key)
  }

  _clearScreen () {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  _createCanvas (board) {
    var canvas = document.createElement('canvas')
    canvas.id = 'game-canvas'
    canvas.width = this._scale(board.width())
    canvas.height = this._scale(board.height())
    canvas.style.zIndex = 8
    canvas.style.position = 'absolute'
    canvas.style.border = '1px solid'

    return canvas
  }

  _scale (value) {
    return value * PIXEL_TO_COORD
  }
}

export default Canvas
