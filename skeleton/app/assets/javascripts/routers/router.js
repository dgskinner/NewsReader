NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "index",
    "api/feeds/:id": "show",
    'feeds/:id': "feedShow"
  },
  
  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({collection: NewsReader.feeds});
    this.$rootEl.html(indexView.render().$el);
  },
  
  feedShow: function (id) {
    // alert("The ID of the feed you clicked on is: " + id)
    var feed = NewsReader.feeds.getOrFetch(id);
    var showView = new NewsReader.Views.FeedShow({ model: feed });
    $("#entries").html(showView.render().$el);
    this.index();
  }
});
