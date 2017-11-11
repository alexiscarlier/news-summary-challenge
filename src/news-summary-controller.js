(function(exports) {

  function NewsSummaryController() {
    this._newsStorySummaryList = new NewsStorySummaryList();
    this._newsStorySummaryListView = new NewsStorySummaryListView(this._newsStorySummaryList);
  }

  NewsSummaryController.prototype.getNewsStorySummaryList = function() {
    return this._newsStorySummaryList;
  };

  NewsSummaryController.prototype.getNewsStorySummaryListView = function() {
    return this._newsStorySummaryListView;
  };

  NewsSummaryController.prototype.getAndUseHTML = function() {
    var element = document.getElementById("app");
    var currentView = this.getNewsStorySummaryListView();
    element.innerHTML += currentView.display();
  };

  exports.NewsSummaryController = NewsSummaryController;
})(this);

(function(exports) {
  window.onload = function() {
    for (i = 0; i < jsonP.response.results.length; i++) {
      newsSummaryController = new NewsSummaryController();
      newsStoryTitle = jsonP.response.results[i].webTitle;
      newsSummaryController.getNewsStorySummaryList().createNewsStorySummary(newsStoryTitle);
      newsSummaryController.getAndUseHTML();
    }
  };
})(this);


// (function(exports) {
//   window.onload = function() {
//     noteController = new NoteController();
//     noteController.submitListener();
//     noteController.makeUrlShowFullNote();
//     noteController.getAndUseHTML();
//   };
// })(this);




// (function(exports) {
//
//   function NoteController() {
//     this._noteList = new NoteList();
//     // this._noteList.createNote("Favourite drink: seltzer");
//     this._view = new View(this._noteList);
//   }
//
//   NoteController.prototype.getView = function() {
//     return this._view;
//   };
//
//   NoteController.prototype.getAndUseHTML = function() {
//     var element = document.getElementById("app");
//     var currentView = noteController.getView();
//     element.innerHTML = currentView.display();
//   };
//
//
//   // function makeUrlShowFullNote() {
//   //   window.addEventListener("hashchange", showFullNoteForPage);
//   // }
//
//   NoteController.prototype.makeUrlShowFullNote = function() {
//     window.addEventListener("hashchange", showFullNoteForPage);
//   };
//
//   function showFullNoteForPage() {
//     showNote(getNoteFromUrl(window.location));
//   }
//
//   function getNoteFromUrl(location) {
//     console.log(location);
//     return location.hash.split("/")[1];
//   }
//
//   function showNote(note) {
//     document
//       .getElementById("full-note")
//       .innerHTML = noteController._noteList.getNotes()[parseInt(note)].showContents();
//   }
//
//
//
//   NoteController.prototype.submitListener = function() {
//     form = document.getElementById("text");
//     form.addEventListener("click", function(event) {
//       event.preventDefault();
//       noteContents = document.getElementById("note-text").value;
//       noteController._noteList.createNote(noteContents);
//       noteController.getAndUseHTML();
//     });
//   };
//
//
//   exports.NoteController = NoteController;
// })(this);
//
//
// (function(exports) {
//   window.onload = function() {
//     noteController = new NoteController();
//     noteController.submitListener();
//     noteController.makeUrlShowFullNote();
//     noteController.getAndUseHTML();
//   };
// })(this);
