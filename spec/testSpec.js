describe("Player", function() {

  beforeEach(function() {
  });

  it("should be able to play a Song", function() {
    expect(true).toEqual(true);

  });

  describe("when song has been paused", function() {
    beforeEach(function() {
    });

    it("should indicate that the song is currently paused", function() {

      // demonstrates use of 'not' with a custom matcher
      // expect(player).not.toBePlaying(song);
    });

  });

});
