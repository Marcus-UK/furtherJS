function testNoteControllerDisplayHTML() {

  var noteListStub = {
    store: function() {

    }
  };

  var text = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";

  function noteListViewDouble () {};

  noteListViewDouble.prototype = {
    getHTML: function() { return text }
  };
  var notelistviewdouble = new noteListViewDouble();
  var noteController = new NoteController(noteListStub);
  noteController.listView = notelistviewdouble;

  noteController.viewNote();
  assert.isTrue(document.getElementById('app').innerHTML === text)
   }

   testNoteControllerDisplayHTML();
