import Karel from './models/karel.js'
import Boulder from './models/boulder.js'
import Tree from './models/tree.js'
import _ from 'underscore'

const STEP = 1
let _width, _height, _walls, _boulders

class Environment {
  constructor ({ width, height, boulderCount }) {
    _width = width 
    _height = height
    _boulders = []
    _walls = []

    this.createWalls()
    this.createBoulders(boulderCount)
  }

  createBoulders (count) {
    for (let i = 0; i < count; i++) {
      const boulder = new Boulder(this._randomAvailableCoordinate())
      _boulders.push(boulder)
    }

    return _boulders
  }

  createWalls () {
    for(let y = 0; y < _height; y++) {
      for (let x = 0; x < _width; x++) {
        if (y == 0 || y == _height - STEP || x == 0 || x == _width - STEP) {
          const wall = new Boulder({ x: x, y: y })  

          _walls.push(wall)
        }
      }
    } 
  }

  walls () {
    return _walls 
  }

  boulders () {
    return _boulders
  }

  //TODO: This may result to filling the stack when the board is full
  _randomAvailableCoordinate () {
    const coord = { x: this._randomX(), y: this._randomY() }
     
    const existing = _.find(this._occupiedCoordinates(), (savedCoord) => {
      return _.isEqual(coord, savedCoord) 
    })

    if (!!existing) {
      this._randomAvailableCoordinate() 
    } else {
      return coord
    }
  }

  _occupiedCoordinates () {
    return (
      _.map(this._allModels(), (model) => { return model.coordinates() })
    )
  }

  _allModels () {
    return _walls.concat(_boulders)
  }

  _randomX () {
    return Math.floor(Math.random() * (_width - STEP))
  }

  _randomY () {
    return Math.floor(Math.random() * (_height - STEP))
  }
}

export default Environment
