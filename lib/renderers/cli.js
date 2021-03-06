import _ from 'underscore'
import clear from 'clear'

const CLI_LEGEND = {
  karel_N: '\u2191',
  karel_S: '\u2193',
  karel_E: '\u2192',
  karel_W: '\u2190',
  tree_S: '#',
  boulder_S: '*'
}

// TODO: namespace to renderers
class Cli {
  constructor ({board, clearScreen, renderRow}) {
    this._board = board

    // Functions
    this.clearScreen = clearScreen || clear
    this.renderRow = renderRow || console.log
  }

  render () {
    this.clearScreen()

    for (let y = 0; y < this._board.height(); y++) {
      let row = ''

      for (let x = 0; x < this._board.width(); x++) {
        const model = this._findModelOnPosition({x, y})

        row = row + this._getSpriteForModel(model)
      }

      this.renderRow(row)
    }
  }

  setBoard (board) {
    this._board = board
  }

  _findModelOnPosition (coord) {
    return _.find(this._board.allModels(), (model) => {
      return _.isEqual(coord, model.coordinates())
    })
  }

  _getSpriteForModel (model) {
    if (!model) { return ' ' }

    const key = `${model.type()}_${model.direction()}`
    return CLI_LEGEND[key]
  }
}

export default Cli
