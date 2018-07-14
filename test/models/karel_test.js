import assert from 'assert'
import Karel from '../../lib/models/karel.js'

describe('Karel', () => {
  describe('#move', () => {
    it('does not change direction', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.move()

      assert.equal(karel.direction(), 'N')
    })

    it('moves a step north given N', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.move()

      assert.deepEqual(karel.coordinates(), { x: 1, y: 1 })
    })

    it('moves a step south given S', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'S' })
      karel.move()

      assert.deepEqual(karel.coordinates(), { x: 1, y: 3 })
    })

    it('moves a step west given W', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'W' })
      karel.move()

      assert.deepEqual(karel.coordinates(), { x: 0, y: 2 })
    })

    it('moves a step west given E', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      karel.move()

      assert.deepEqual(karel.coordinates(), { x: 2, y: 2 })
    })
  })

  describe('#turnLeft', () => {
    it('does not change position', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnLeft()

      assert.deepEqual(karel.coordinates(), { x: 1, y: 2 })
    })

    it('turns west given N', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnLeft()

      assert.equal(karel.direction(), 'W')
    })

    it('turns east given S', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'S' })
      karel.turnLeft()

      assert.equal(karel.direction(), 'E')
    })
  })

  describe('#turnRight', () => {
    it('does not change position', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnRight()

      assert.deepEqual(karel.coordinates(), { x: 1, y: 2 })
    })

    it('turns west given N', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnRight()

      assert.equal(karel.direction(), 'E')
    })

    it('turns east given E', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      karel.turnRight()

      assert.equal(karel.direction(), 'S')
    })
  })

  describe('#pickUp', () => {
    it('puts object in the bag when can be picked up', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      const object = { canBePickedUp: () => true }

      karel.pickUp(object)
      assert(karel.isCarrying())
    })

    it('does not put object in bag when cannot be picked up', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      const object = { canBePickedUp: () => false }

      karel.pickUp(object)
      assert(!karel.isCarrying())
    })
  })

  describe('#putDown', () => {
    it('removes object out of the bag', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      const object = { canBePickedUp: () => true }

      karel.pickUp(object)
      assert(karel.isCarrying())

      karel.putDown()
      assert(!karel.isCarrying())
    })
  })
})
