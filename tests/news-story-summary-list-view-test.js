(function(exports) {
  function viewStorySummaryList() {
    newsStorySummaryList = new NewsStorySummaryList();
    newsStorySummaryListView = new NewsStorySummaryListView(newsStorySummaryList);
    newsStorySummaryList.createNewsStorySummary("This is the first summary");
    newsStorySummaryList.createNewsStorySummary("This is the second summary");
    assert.isTrue(newsStorySummaryListView.display() === '<ul><li><div><a href="#notes/0">This is the first summary</a></div></li><li><div><a href="#notes/1">This is the second summary</a></div></li></ul>');
  }
  viewStorySummaryList();
  exports.viewStorySummaryList = viewStorySummaryList;
})(this);
