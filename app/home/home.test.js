'use strict';

describe('ngWalkthrough.home module', function () {

    beforeEach(module('ngWalkthrough.home'));

    describe('home controller', function () {
        var homeController;
        beforeEach(inject(function ($controller) {
            homeController = $controller('HomeController');
        }));

        it('should load the home controller', function () {
            expect(homeController).toBeDefined();
        });

        it('should load the story', function () {
            expect(homeController.story).toContain("Collaboratively administrate");
        });
        
        it('should count all of the words in the story', function() {
           var story = "this is a story.";
           homeController.story = story;
           var totalWords = homeController.countWords(); 
           
           expect(totalWords).toEqual(4);
        });
    });
});