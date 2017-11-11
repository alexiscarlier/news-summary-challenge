var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};

function getSummary() {
  newsStorySummary = new NewsStorySummary("This is the news summary");
  assert.isTrue(newsStorySummary.getSummary() === "This is the news summary");
}

getSummary();
