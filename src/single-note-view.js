(function(exports){
function singleNoteView(note = new Note()) {
  this.note = note;
}

singleNoteView.prototype.toHtml = function() {
  return "<div>" + this.note._text + "</div>";
}
exports.singleNoteView = singleNoteView;
})(this);
