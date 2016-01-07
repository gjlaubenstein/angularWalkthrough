'use strict';

describe('ngWalkthrough.home module', function () {

    beforeEach(module('ngWalkthrough.home'));

    describe('home controller', function () {

        it('should load the home controller', inject(function ($controller) {
            //spec body
            var homeController = $controller('HomeController');
            expect(homeController).toBeDefined();
            expect(homeController.story).toContain("Collaboratively administrate");
        }));
    });
});