(function(exports) {
  function NoteController(list = new List()){
  this.list = list
  this.list.store('Favourite drink: Seltzer');
  this.listView = new ListView(this.list)
}

  NoteController.prototype.viewNote = function() {
    var notesHTML = this.listView.getHTML()
    document.getElementById('app').innerHTML = notesHTML
  }
exports.NoteController = NoteController;
})(this);
