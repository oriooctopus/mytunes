// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function(e) {
      // if there are no songs in the queue 
      // this.SongQueueView({collection: e.collec});
        // console.log(12345);
      if (this.models.length === 1) {
        // call playFirst
        this.playFirst();
      }

    });

    this.on('ended', function() {
      this.dequeue();
      if (this.models.length > 0) {
        this.playFirst();
      }
    });
    // debugger;

    this.on('dequeue', function() {
      this.dequeue();
    });



  },

  playFirst: function() {
    this.at(0).play();

  },

  dequeue: function() {
    // debugger;
    this.remove(this.models[0]);
    if (this.models.length > 0) {
      this.playFirst();
    }
    // this.get('models').shift();
    // console.log(12345, this.models);
  },

  enqueue: function(song) {
    this.add(song);

  }



});