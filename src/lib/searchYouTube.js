var searchYouTube = (options, callback) => {
  var searchObj = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    videoEmbeddable: true,
    type: 'video'
  };

  $.get('https://www.googleapis.com/youtube/v3/search', searchObj, 
    function(data) {
      callback(data.items);
    });
};

window.searchYouTube = searchYouTube;
