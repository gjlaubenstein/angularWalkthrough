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
    });
});