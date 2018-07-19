import _ from 'underscore'
import clear from 'clear'

const CLI_LEGEND = {
  karel: "k",
  tree: "#",
  boulder: "*"
}

// TODO: namespace to renderers
class Cli {
  constructor ({environment}) {
    this._environment = environment
  }

  render () {
    // TODO: override this
    clear()

    for (let y = 0; y < this._environment.height(); y++) {
      let row = ''

      for (let x = 0; x < this._environment.width(); x++) { const model = this._findModelOnPosition({x,y})

        row = row + this._getSpriteForModel(model)
      }

      // TODO: override this
      console.log(row)
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
  
  //TODO: render direction
  //TODO: listen to event loop
}

export default Cli
