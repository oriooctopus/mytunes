// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    // collection.on('add pop', function() {
    //   debugger;
    //   this.render();
    // }, this);
  },

  // events: {
  //   'click': function(e) {
  //     debugger;
  //   }
  // },

  render: function() {
   //  var html = '<ul class="wefwef">';
  	// this.collection.models.forEach(function(element) {
   //    var temp = new SongQueueEntryView({model: element}).render();
   //    html += temp[0].innerHTML;
  	// });
   //  html += '</ul>';
   //  this.$el.append(html);
   this.$el.children().detach();

   this.$el.html('<th>Queue</th>'/*'<ul class="wefwef"'*/).append(
      this.collection.models.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );//.append('</ul>');






   // this.$el.on('click', function() {
   //   debugger;
   // })

   // $('.queueButton').on('click', function() {
   //   debugger;
   //   this.model.dequeue();
   // })
  }

});
