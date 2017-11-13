(function(exports) {

  function NewsStorySummaryList() {
    this._newsStorySummaries = [];
  }

  NewsStorySummaryList.prototype.getNewsStorySummaries = function() {
    return this._newsStorySummaries;
  };

  NewsStorySummaryList.prototype.createNewsStorySummary = function(summary) {
    this._newsStorySummaries.push(new NewsStorySummary(summary));
  };

  exports.NewsStorySummaryList = NewsStorySummaryList;
})(this);
