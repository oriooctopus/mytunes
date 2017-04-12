
var SearchView = Backbone.View.extend({

  el: '<form><input type="text" id="search" placeholder="search!"><input type="submit"></form>',

  render: function() {
    return this.$el;
  },

  events: {
    submit: function(e) {
      e.preventDefault();
      var inputVal = $('#search').val();
      getData(inputVal);
    }
  }

});