(function(exports) {
  function getSummary() {
    newsStorySummary = new NewsStorySummary("This is the news summary");
    assert.isTrue(newsStorySummary.getSummary() === "This is the news summary");
  }
  getSummary();
  exports.getSummary = getSummary;
})(this);
