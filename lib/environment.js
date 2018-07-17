import Karel from './models/karel.js'
import Boulder from './models/boulder.js'
import Tree from './models/tree.js'
import _ from 'underscore'

const STEP = 1

class Environment {
  constructor ({ width, height, boulderCount, boulders }) {
    this._width = width
    this._height = height
    this._boulders = []
    this._walls = []
    this._karel = null

    this.createWalls()
    this.createKarel()

    if (boulders) {
      this.createBoulders(boulders)
    }

    if (boulderCount && !boulders) {
      this.createBouldersFromCount(boulderCount)
    }
  }

  createBouldersFromCount (count) {
    for (let i = 0; i < count; i++) {
      const coord = this._randomAvailableCoordinate()
      const boulder = new Boulder(coord)

      this._boulders.push(boulder)
    }

    return this._boulders
  }

  createBoulders (boulderCoords) {
    _.each(boulderCoords, (coord) => {
      if (!this._isCoordinateAvailable(coord)) { return }

      const boulder = new Boulder(coord)

      this._boulders.push(boulder)
    })
  }

  createWalls () {
    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        if (this._isOnBoundary(x, y)) {
          const wall = new Tree({ x: x, y: y })

          this._walls.push(wall)
        }
      }
    }
  }

  createKarel () {
    this._karel = new Karel({ x: 1, y: 1, direction: 'S' })
  }

  getModelFromPosition (coord) {
    return _.find(this._allModels(), (model) => {
      return _.isEqual(model.coordinates(), coord)
    })
  }

  walls () {
    return this._walls
  }

  boulders () {
    return this._boulders
  }

  karel () {
    return this._karel
  }

  // TODO: This may result to filling the stack when the board is full
  _randomAvailableCoordinate () {
    const coord = { x: this._randomX(), y: this._randomY() }
    const existing = this._isCoordinateAvailable(coord)

    if (existing) {
      return this._randomAvailableCoordinate()
    } else {
      return coord
    }
  }

  _isCoordinateAvailable (coord) {
    const existing = _.find(this._occupiedCoordinates(), (savedCoord) => {
      return _.isEqual(coord, savedCoord)
    })

    return !existing
  }

  _occupiedCoordinates () {
    return (
      _.map(this._allModels(), (model) => { return model.coordinates() })
    )
  }

  _allModels () {
    return this._walls.concat(this._boulders).concat([this._karel])
  }

  _randomX () {
    return Math.ceil(Math.random() * (this._width - STEP))
  }

  _randomY () {
    return Math.ceil(Math.random() * (this._height - STEP))
  }

  _isOnBoundary (x, y) {
    return y === 0 || y === this._height - STEP || x === 0 || x === this._width - STEP
  }
}

export default Environment
