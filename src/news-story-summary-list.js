(function(exports) {

  function NewsStorySummaryList() {
    this._newsStorySummaries = [];
  }

  NewsStorySummaryList.prototype.getNewsStorySummaries = function() {
    return this._newsStorySummaries;
  };

  NewsStorySummaryList.prototype.createNewsStorySummary = function(summary) {
    newsStorySummary = new NewsStorySummary(summary);
    this.getNewsStorySummaries().push(newsStorySummary);
  };

  exports.NewsStorySummaryList = NewsStorySummaryList;
})(this);
