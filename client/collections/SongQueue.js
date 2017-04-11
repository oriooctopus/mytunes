// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on(  'add', this.enqueue, this );

    this.on('ended', function() {
      this.dequeue();
      if (this.models.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', this.dequeue, this);


  },

  playFirst: function() {
    this.at(0).play();    
  },

  dequeue: function() {

    this.remove(this.models[0]);
    if (this.models.length > 0) {
      this.playFirst();
    }

  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
    this.add(song);
  }

});