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
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    
    this.songQueue.on('add ended enqueue dequeue', function() {
      // debugger;
      this.songQueueView.render();
    }, this);


    // this.songQueueView.$el.on('click', function() {
    //   debugger;
    // }, this)
    // this.songQueueView.on('add', function(e) {
    //   console.log(9999999);
    // });
    // this.on('click', function() {
    //   debugger;
    // })

  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
