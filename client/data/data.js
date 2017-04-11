// data.js - Defines an array of data regarding song files and their accompanying details.
// var songData = [
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
//     title: 'One In A Million',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
//     title: 'Age Ain\'t Nothing But A Number',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
//     title: 'Hot Like Fire',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
//     title: 'If Your Girl Only Knew',
//     artist: 'Aaliyah',
//   }
// ];
var songData = [];
$.ajax({
  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  type: 'GET', 
  contentType: 'application/json',
  success: function(data) {
    songData = data.results;
    library = new Songs(songData);
    app = new AppModel({library: library});
        
    
    // build a view for the top level of the whole app
    appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
  },
  error: function(error) {
  	debugger;
    console.log('error with songData ajax call!', error);
  }
});


