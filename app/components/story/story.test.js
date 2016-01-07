'use strict';

describe('ngWalkthrough.home module', function() {

  beforeEach(module('ngWalkthrough.story'));

  describe('story service', function(){
      var storyService;
      beforeEach(inject(function(story){
          storyService = story;
      }));
      it("should provide return a story", function() {
          var story = storyService.getStory();
          expect(story).toContain("Collaboratively administrate");
      });
  });
});