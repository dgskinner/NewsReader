NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function (arr, opts2) {
    this.feed = opts2.feed
  },
  url: function () {
    return this.feed.url() + 'entries';
  }
})