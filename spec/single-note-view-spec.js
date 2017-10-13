function singleNoteViewTest() {
  var note1 = new Note('apple');
  var singleNV = new singleNoteView(note1);
  console.log(singleNV);
  var text = "<div>apple</div>";
  assert.isTrue(singleNV.toHtml() === text);
}
singleNoteViewTest();
