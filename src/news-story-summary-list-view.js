(function(exports) {

  function NewsStorySummaryListView(newsStorySummaryList) {
    this._newsStorySummaryList = newsStorySummaryList;
  }

  NewsStorySummaryListView.prototype.getNewsStorySummaryList = function() {
    return this._newsStorySummaryList;
  };

  NewsStorySummaryListView.prototype.display = function() {
    htmlString = "<ul>";
    var newsStoryArray = this.getNewsStorySummaryList().getNewsStorySummaries().map(function(story, index) {
      storySummary = story.getSummary();
      return '<li><div><a href="#notes/' + index + '">' + storySummary + "</a></div></li>";
    });
    htmlString += newsStoryArray.join("") + "</ul>";
    return htmlString;
  };
// make the above method nicer; break up into submethods
  exports.NewsStorySummaryListView = NewsStorySummaryListView;
})(this);
