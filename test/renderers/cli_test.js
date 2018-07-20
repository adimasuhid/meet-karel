import assert from 'assert'
import Environment from '../../lib/environment.js'
import Cli from '../../lib/renderers/cli.js'

describe('Renderer.Cli', () => {
  describe('#render', () => {
    it('displays the board', () => {
      const coord = { x: 1, y: 2 }
      const contents = []
      const environment = new Environment({ width: 10, height: 5, boulders: [coord] })
      const renderer = new Cli({
        environment,
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
