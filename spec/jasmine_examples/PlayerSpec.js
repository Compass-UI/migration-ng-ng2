describe("Player", function() {
  // var Player = require('../../lib/jasmine_examples/Player');
  // var Song = require('../../lib/jasmine_examples/Song');
  
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    expect(true).toEqual(true);
    // require(['/lib/jasmine_examples/Player', '/jasmine_examples/Song'], function(player, song){
      require(['player', 'song', './spec/helpers/jasmine_examples/SpecHelper'], function(player, song, sh){
      
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
    })
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
    expect(true).toEqual(true);
      
      // require(['/lib/jasmine_examples/Player', '/lib/jasmine_examples/Song'], function(player, song){
        // require(['player', 'song'], function(player, song){
      require(['player', 'song', './spec/helpers/jasmine_examples/SpecHelper'], function(player, song, SpecHelper){
          
      
        
      expect(player.sh.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
        })
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
