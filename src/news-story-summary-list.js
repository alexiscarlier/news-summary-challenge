(function(exports) {

  function NewsStorySummaryList() {
    this._newsStorySummaries = [];
  }

  NewsStorySummaryList.prototype.getNewsStorySummaries = function() {
    return this._newsStorySummaries;
  };

  NewsStorySummaryList.prototype.createNewsStorySummary = function(summary) {
    this.getNewsStorySummaries().push(new NewsStorySummary(summary));
  };

  exports.NewsStorySummaryList = NewsStorySummaryList;
})(this);
