(function(exports) {

function NewsStorySummary(summary) {
  this._summary = summary;
}

NewsStorySummary.prototype.getSummary = function() {
  return this._summary;
};

  exports.NewsStorySummary = NewsStorySummary;
})(this);
