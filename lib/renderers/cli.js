import _ from 'underscore'

const CLI_LEGEND = {
  "karel" => "k",
  "tree" => "#",
  "boulder" => "*"
}

class Renderers.Cli {
  constructor ({environment}) {
    this._environment = environment
  }

  render () {
    // TODO: override this
    clear()

    for (let y = 0; y < this._environment(); y++) {
      let row = ''

      for (let x = 0; x < this._width; x++) { const model = this._findModelOnPosition({x,y})

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
  
  //TODO: listen to rerender
}

export default Renderers.Cli
