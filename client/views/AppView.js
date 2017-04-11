// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({


  initialize: function(params) {
    
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueue = this.model.get('songQueue');
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      var currentSong = model.get('currentSong');
      var currentPlayCount = currentSong.get('playCount');
      
      currentSong.set('playCount', currentPlayCount + 1);
      
      this.libraryView.render();     

      this.playerView.setSong(model.get('currentSong'));
    }, this);


  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
