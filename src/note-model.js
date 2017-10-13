(function(exports){
  function Note(text, id){
    this._text = text;
    this.id = id
  };

  Note.prototype.getText = function() {
    return this._text;
  };

  Note.prototype.getId = function() {
    return this.id;
  };
  exports.Note = Note;
})(this);
