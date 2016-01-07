'use strict';

describe('ngWalkthrough.home module', function() {

  beforeEach(module('ngWalkthrough.story'));

  describe('story service', function(){
      var story;
      beforeEach(inject(function(storyService){
          story = storyService;
      }));
      it("should provide a method to get the story", function() {
          expect(story.getStory).toBeDefined();
      });
  });
});