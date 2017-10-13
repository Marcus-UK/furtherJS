'use strict';

(function(exports){
  function List(){
    this.notes = [];
  };

  List.prototype.display = function() {
    return this.notes
  }

  List.prototype.store = function(text, Noteconstructor = Note) {
    var note = new Noteconstructor(text, this.notes.length);
    this.notes.push(note);
  }

  exports.List = List;
})(this);
