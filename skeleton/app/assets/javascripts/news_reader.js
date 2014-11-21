window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    var options = {
      $rootEl: $("#content")
    };
    var router = new NewsReader.Routers.Router(options);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
