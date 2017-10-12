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

// (function(exports){
//   function NoteController(noteList) {
//     this.noteList = noteList;
//     this.noteList.createAndAdd('Favourite drink: seltzer');
//     this.noteListView = new NoteListView(this.noteList);
//   }
//
//   NoteController.prototype.displayNotes = function () {
//     var notesHTML = this.noteListView.getHTML();
//     document.getElementById('app').innerHTML = notesHTML;
//   };
//
//   exports.NoteController = NoteController;
// })(this);
