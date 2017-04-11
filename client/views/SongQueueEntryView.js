// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<li><%= artist %> <%= title %></li>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
  // your code here!
});
