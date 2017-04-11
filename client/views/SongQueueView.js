// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add pop', function() {
      this.render();
    }, this);
  },

  render: function() {
    var html = '<ul>';
  	this.collection.models.forEach(function(element) {
      html += new SongQueueEntryView({model: element}).render();
  	});

    html += '</ul>';
    this.$el.html(html);
    // return this.$el;
  }

});
