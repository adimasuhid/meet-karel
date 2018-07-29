// Setup Karel
window.Karel.game.attach(document.getElementById('game'))
window.Karel.game.addAssetSource(document.getElementById('asset-source'))

var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
