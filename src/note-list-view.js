'use strict';

(function(exports){
  function ListView(list = new List){
    this.list = list
  }

  ListView.prototype.getHTML = function(){
    console.log(this.list.notes)
    var returnText = "<ul>";
    console.log(this.list.notes.length)
    for( var i = 0 ; i < this.list.notes.length; i++ ) {
      returnText += "<li><div>" +
      this.list.notes[i].getText().substring(0, 20) +
      '...' +
      "</div></li>";
    }
    returnText +=  "</ul>";
    return returnText;
  }
  exports.ListView = ListView
})(this);
