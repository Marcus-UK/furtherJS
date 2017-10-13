(function(exports) {
  function NoteController(list = new List()){
  this.list = list
  this.listView = new ListView(this.list)
}

  NoteController.prototype.viewNote = function() {
    var notesHTML = this.listView.getHTML()
    document.getElementById('app').innerHTML = notesHTML
  }
exports.NoteController = NoteController;
})(this);
