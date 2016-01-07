'use strict';

angular
    .module('ngWalkthrough.story', [])
    .service('story', story);
    
function story() {
    var story = {
        'getStory': getStory
    };
    
    return story;
    
    function getStory() {
        return "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.";
    }
}