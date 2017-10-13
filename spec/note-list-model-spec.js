function testListStoresNotes() {
  var list = new List();
  list.store('test');
  var notesArray = list.display();
  var note1 = notesArray[0];
  assert.isTrue(note1.getText() === 'test');
}
testListStoresNotes();

function testNoteHasIdAssignedOnInstantiation(){
  var list1 = new List()
  list1.store('Hello')
  assert.isTrue(list1.notes[0].id === 0);
}
testNoteHasIdAssignedOnInstantiation();
