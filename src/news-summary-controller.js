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

  NewsSummaryController.prototype.makeUrlShowFullNewsSummary = function() {
    window.addEventListener("hashchange", showFullNoteForPage);
  };

  function showFullSummaryForPage() {
    showNote(getNewsSummaryFromUrl(window.location));
  }

  function getNewsSummaryFromUrl(location) {
    return location.hash.split("/")[1];
  }

  function showNewsSummary(newsSummary) {
    document
      .getElementById("news-story-summary")
      .innerHTML = newsSummaryController._newsStorySummaryList.getNewsStorySummaries()[pasrseInt(newsSummary).getSummary()];
  }

  NewsSummaryController.prototype.submitListener = function() {
    document
      .getElementById("app")
      .addEventListener("click", function(event) {
        event.preventDefault();
        document
          .getElementById("news-story-summary")
          .innerHTML = jsonP.response.results.fields.body;
          // the results thing here needs an index, probably from parse int
          // use the hash change to do this
      });
    };

  exports.NewsSummaryController = NewsSummaryController;
})(this);


(function(exports) {
  window.onload = function() {
    newsSummaryController = new NewsSummaryController();
    for (i = 0; i < jsonP.response.results.length; i++) {
      newsStoryTitle = jsonP.response.results[i].webTitle;
      newsSummaryController.getNewsStorySummaryList().createNewsStorySummary(newsStoryTitle);
    }
    // newsSummaryController.submitListener();
    // try adding an index to submist listener and putting it in the iteration
    // newsSummaryController.makeUrlShowFullNewsSummary();
    newsSummaryController.getAndUseHTML();
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

// I need to add the news story summaries to the news
// stories summaries array

// newsSummaryController = new NewsSummaryController();
// // newsSummaryController.submitListener(i);
// // newsSummaryController.makeUrlShowFullNewsSummary();
// newsStoryTitle = jsonP.response.results[i].webTitle;
// newsSummaryController.getNewsStorySummaryList().createNewsStorySummary(newsStoryTitle);
// newsSummaryController.getAndUseHTML();
//
// newsSummaryController.getNewsStorySummaryList()
