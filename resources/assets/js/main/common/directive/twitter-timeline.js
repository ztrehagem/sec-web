modules.common

.directive('twitterTimeline', [function() {
  return {
    restrict: 'A',
    link: function() {
      !function(d,s,id){var js,fjs=d.getElementById(s),p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement('script');js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"twitter-timeline","twitter-wjs");
    }
  }
}]);
