import assert from 'assert'
import Karel from '../lib/karel.js'

describe('Karel', () => {
  describe('#constructor', () => {
    it('sets direction', () => {
      const karel = new Karel({ x: 1, y: 2, direction: 'N' })

      assert.equal(karel.direction, 'N')
    })
  })
})
