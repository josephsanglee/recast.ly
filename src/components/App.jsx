class App extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData

    };
  }

  onVideoEntryClick(e) {
    var title = e.target.innerHTML;
    var newVideo = exampleVideoData.filter(video => title === video.snippet.title)[0];

    this.setState({
      video: newVideo 
    });
  }


  render() {

    return (
      <div>
        <Nav />
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