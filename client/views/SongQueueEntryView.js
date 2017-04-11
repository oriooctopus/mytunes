// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  // template: _.template('<li><%= artist %> <%= title %> <button class="queueButton">iwfeifewhiwefuhiufew</button></li>'),

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
  	'click': function(e) {
      this.model.dequeue();
  	}
  },

  render: function() {
  	// this.$el.on('click', function() {
  	//   // console.log(1234565);
  	//   debugger;
  	// }, this);
    return this.$el.html(this.template(this.model.attributes));
  }
  // your code here!
});
