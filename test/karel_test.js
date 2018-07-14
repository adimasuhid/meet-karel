import assert from 'assert'
import Karel from '../lib/karel.js'

describe('Karel', () => {
  describe('#constructor', () => {
    it('sets direction', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })

      assert.equal(karel.direction, 'N')
    })

    it('sets x', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })

      assert.equal(karel.x, 1)
    })

    it('sets y', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })

      assert.equal(karel.y, 2)
    })
  })

  describe('#move', () => {
    it('does not change direction', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.move() 

      assert.equal(karel.direction, 'N')
    })

    it('moves a step north given N', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.move() 

      assert.equal(karel.y, 1)
      assert.equal(karel.x, 1)
    })

    it('moves a step south given S', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'S' })
      karel.move() 

      assert.equal(karel.y, 3)
      assert.equal(karel.x, 1)
    })

    it('moves a step west given W', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'W' })
      karel.move() 

      assert.equal(karel.y, 2)
      assert.equal(karel.x, 0)
    })

    it('moves a step west given E', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      karel.move() 

      assert.equal(karel.y, 2)
      assert.equal(karel.x, 2)
    })
  })

  describe('#turnLeft', () => {
    it('does not change position', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnLeft()

      assert.equal(karel.x, 1)
      assert.equal(karel.y, 2)
    })

    it('turns west given N', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnLeft()

      assert.equal(karel.direction, 'W')
    })

    it('turns east given S', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'S' })
      karel.turnLeft()

      assert.equal(karel.direction, 'E')
    })
  })

  describe('#turnRight', () => {
    it('does not change position', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnRight()

      assert.equal(karel.x, 1)
      assert.equal(karel.y, 2)
    })

    it('turns west given N', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })
      karel.turnRight()

      assert.equal(karel.direction, 'E')
    })

    it('turns east given E', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'E' })
      karel.turnRight()

      assert.equal(karel.direction, 'S')
    })
  })
})
