NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feeds/show'],
  
  initialize: function () {
    // this.model = options.model;
    this.listenTo(this.model, "sync", this.render);
    this.model.fetch();
  },
  
  render: function() {
    console.log("Refreshing...");
    var content = this.template({ entries: this.model.entries() });
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click #refresh": "render"
  }
})