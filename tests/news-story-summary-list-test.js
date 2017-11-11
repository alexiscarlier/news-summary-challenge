function getSummaries() {
  newsStorySummaryList = new NewsStorySummaryList();
  newsStorySummaryList.createNewsStorySummary("This is the news summary");
  assert.isTrue(newsStorySummaryList.getNewsStorySummaries().pop().getSummary() === "This is the news summary");
}

getSummaries();
