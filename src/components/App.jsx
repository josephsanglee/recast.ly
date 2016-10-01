class App extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedYouTubeSearch = _.debounce(this.props.searchYouTube, 500);

    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  onVideoEntryClick(e) {
    // console.log(e.dispatchMarker);
    var title = e.currentTarget.textContent;
    var newVideo = this.state.videos.filter(video => title === video.snippet.title)[0];

    this.setState({
      video: newVideo 
    });
  }

  onInputChange(e) {
    e.persist();
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: e.currentTarget.value,
      max: 5
    };

    this.debouncedYouTubeSearch(options, data => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'dogs',
      max: 5
    };

    this.props.searchYouTube(options, data => {
      this.setState({
        video: data[0],
        videos: data
      });
    });

  }


  render() {

    return (
      <div>
        <Nav onInputChange={this.onInputChange.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList onVideoEntryClick={this.onVideoEntryClick.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;