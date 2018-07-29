// Setup Karel
window.Karel.game.attach(document.getElementById('game'))
window.Karel.game.addAssetSource(document.getElementById('asset-source'))

window.editor = ace.edit("editor");
window.editor.setTheme("ace/theme/monokai");
window.editor.session.setMode("ace/mode/javascript");

document.getElementById("run").addEventListener("click", function () {
  window.Karel.game.resolve(function () {
    eval(window.editor.getValue())
  })
});
