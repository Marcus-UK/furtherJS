var list1 = new List()
list1.store('Hello')
list1.store('Hey')
var controller = new NoteController(list1)
controller.viewNote();
