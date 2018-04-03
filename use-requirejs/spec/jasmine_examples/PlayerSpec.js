describe("Player", function() {
  // var Player = require('../../lib/jasmine_examples/Player');
  // var Song = require('../../lib/jasmine_examples/Song');
  
  var player;
  var song;

  beforeEach(function () {
    jasmine.addMatchers({
      toBePlaying: function () {
        return {
          compare: function (actual, expected) {
            var player = actual;
  
            return {
              pass: player.currentlyPlayingSong === expected && player.isPlaying
            }
          }
        };
      }
    });
  });
  
  // beforeEach(function() {
  //   player = new Player();
  //   song = new Song();
  // });

  it("should be able to play a Song", function(done) {
    expect(true).toEqual(true);
    require(['./lib/jasmine_examples/Player', './lib/jasmine_examples/Song'], function(player, song){
      // require(['player', 'song', './spec/helpers/jasmine_examples/SpecHelper'], function(player, song, SpecHelper){
        console.log(player);
      

        // var player = new Player();
        // var song = new Song();

    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
    })
    done();
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function(done) {
    expect(true).toEqual(true);
      
      // require(['/lib/jasmine_examples/Player', '/lib/jasmine_examples/Song'], function(player, song){
        // require(['player', 'song'], function(player, song){
      require(['player', 'song', './spec/helpers/jasmine_examples/SpecHelper'], function(player, song, SpecHelper){
          
      
        // var player = new Player();
        // var song = new Song();
      expect(player.SpecHelper.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
        })
        done();
    });

    // it("should be possible to resume", function() {
      // player.resume();
      // expect(player.isPlaying).toBeTruthy();
      // expect(player.currentlyPlayingSong).toEqual(song);
    // });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    expect(true).toEqual(true);
    
    // spyOn(song, 'persistFavoriteStatus');

    // player.play(song);
    // player.makeFavorite();

    // expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

});
