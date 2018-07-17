import assert from 'assert'
import Boulder from '../../lib/models/boulder.js'

describe('Boulder', () => {
  describe('#canBePickedUp', () => {
    it('returns true', () => {
      const boulder = new Boulder({ x: 1, y: 2 })

      assert(boulder.canBePickedUp())
    })
  })

  describe('#pickUp', () => {
    it('sets boulder pickup status to true', () => {
      const boulder = new Boulder({ x: 1, y: 2 })
      assert(!boulder.isPickedUp())

      boulder.pickUp()

      assert(boulder.isPickedUp())
    })

    it('sets boulder position to null', () => {
      const boulder = new Boulder({ x: 1, y: 2 })
      boulder.pickUp()

      assert.deepEqual(boulder.coordinates(), { x: null, y: null })
    })
  })

  describe('#putDown', () => {
    it('places a boulder on a new position', () => {
      const boulder = new Boulder({ x: 1, y: 2 })
      const newCoord = { x: 3, y: 4 }

      boulder.pickUp()
      boulder.putDown(newCoord)

      assert.deepEqual(boulder.coordinates(), newCoord)
    })

    it('sets boulder to be no longer picked up', () => {
      const boulder = new Boulder({ x: 1, y: 2 })
      const newCoord = { x: 3, y: 4 }

      boulder.pickUp()
      boulder.putDown(newCoord)

      assert(!boulder.isPickedUp())
    })

    it('does not work when not picked up', () => {
      const boulder = new Boulder({ x: 1, y: 2 })
      const newCoord = { x: 3, y: 4 }

      boulder.putDown(newCoord)

      assert.notEqual(boulder.coordinates().x, newCoord.x)
      assert.notEqual(boulder.coordinates().y, newCoord.y)
    })
  })
})
