'use strict';

describe('my app', function() {

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });

    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/The Corporate Story/);
    });
    
    it('should render the story text', function() {
       expect(element.all(by.css('[ng-view] .story')).first().getText()).
         toContain("Collaboratively administrate");
    });
    
    it('should render the total words', function() {
       expect(element.all(by.css('[ng-view] .totalWords')).first().getText()).
        toMatch(/Word Count: [0-9]+/); 
    });

  });
});
