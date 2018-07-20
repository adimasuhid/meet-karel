import _ from 'underscore'
import clear from 'clear'

const CLI_LEGEND = {
  karel: 'k',
  tree: '#',
  boulder: '*'
}

// TODO: namespace to renderers
class Cli {
  constructor ({environment, clearScreen, renderRow}) {
    this._environment = environment

    // Functions
    this.clearScreen = clearScreen || clear
    this.renderRow = renderRow || console.log
  }

  render () {
    this.clearScreen()

    for (let y = 0; y < this._environment.height(); y++) {
      let row = ''

      for (let x = 0; x < this._environment.width(); x++) {
        const model = this._findModelOnPosition({x, y})

        row = row + this._getSpriteForModel(model)
      }

      this.renderRow(row)
    }
  }

  _findModelOnPosition (coord) {
    return _.find(this._environment.allModels(), (model) => {
      return _.isEqual(coord, model.coordinates())
    })
  }

  _getSpriteForModel (model) {
    if (!model) { return ' ' }

    return CLI_LEGEND[model.type()]
  }

  // TODO: render direction
}

export default Cli
