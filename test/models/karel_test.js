import assert from 'assert'
import Karel from '../../lib/models/karel.js'
import Boulder from '../../lib/models/boulder.js'

describe('Karel', () => {
  it('does not move when dead', () => {
    const karel = new Karel({ x: 1, y: 2, direction: 'N', alive: false })
    karel.move()

    assert.deepEqual(karel.coordinates(), { x: 1, y: 2 })

    karel.turnLeft()

    assert.equal(karel.direction(), 'N')

    karel.turnRight()

    assert.equal(karel.direction(), 'N')
  })

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

  describe('#status', () => {
    it('returns alive when alive', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })

      assert.equal(karel.status(), 'alive')
    })

    it('returns dead when not alive', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E', alive: false })

      assert.equal(karel.status(), 'dead')
    })
  })

  describe('#pickUp', () => {
    it('puts object in the bag when can be picked up', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      const boulder = new Boulder({ x: 1, y: 3 })

      karel.pickUp(boulder)
      assert(karel.isCarrying())
    })

    it('does not put anything in bag when there is no object', () => {

    })

    context('when object cannot be picked up', () => {
      it('does not put object in bag', () => {
        const karel = new Karel({ x: 1, y: 2, direction: 'E' })
        const object = { canBePickedUp: () => false }

        karel.pickUp(object)
        assert(!karel.isCarrying())
      })

      it('kills karel', () => {
        const karel = new Karel({ x: 1, y: 2, direction: 'E' })
        const object = { canBePickedUp: () => false }

        assert(karel.alive())
        karel.pickUp(object)
        assert(!karel.alive())
      })
    })
  })

  describe('#putDown', () => {
    it('removes object out of the bag', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      const coord = { x: 1, y: 3 }
      const boulder = new Boulder(coord)

      karel.pickUp(boulder)
      assert(karel.isCarrying())

      karel.putDown(coord)
      assert(!karel.isCarrying())
    })
  })

  describe('#coordinatesAhead', () => {
    it('returns coordinates in front', () => {
      const karel = new Karel({ x: 1, y: 1, direction: 'N' })
      assert.deepEqual(karel.coordinatesAhead(), { x: 1, y: 0 })
    })
  })
})
