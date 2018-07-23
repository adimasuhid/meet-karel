import assert from 'assert'
import Board from '../../lib/board.js'
import Cli from '../../lib/renderers/cli.js'

describe('Renderer.Cli', () => {
  describe('#render', () => {
    it('displays the board', () => {
      const coord = { x: 1, y: 2 }
      const contents = []
      const board = new Board({ width: 10, height: 5, boulders: [coord] })
      const renderer = new Cli({
        board,
        clearScreen: () => {},
        renderRow: contents.push.bind(contents)
      })

      renderer.render()

      assert.deepEqual(contents, [
        '##########',
        '#↓       #',
        '#*       #',
        '#        #',
        '##########'
      ])
    })
  })
})
