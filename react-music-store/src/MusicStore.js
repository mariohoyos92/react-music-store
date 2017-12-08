import React, { Component } from "react";

import "./MusicStore.css";

class MusicStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: [],
      activeMusicIndex: 0,
      leftTime: 0,
      progress: 0,
      volume: 0.75,
      play: false
    };
  }

  componentDidMount() {
    const audioContainer = this.audioContainer;
    audioContainer.addEventListener(
      "timeupdate",
      this.updateProgress.bind(this)
    );
    audioContainer.addEventListener("ended", this.end.bind(this));

    this.setState({ playlist: this.props.playlist });
  }
  componentWillUnmount() {
    const audioContainer = this.audioContainer;
    audioContainer.removeEventListener(
      "timeupdate",
      this.updateProgress.bind(this)
    );
    audioContainer.removeEventListener("ended", this.end.bind(this));
  }

  updateProgress() {
    const duration = this.audioContainer ? this.audioContainer.duration : 0;
    const currentTime = this.audioContainer
      ? this.audioContainer.currentTime
      : 0;
    const progress = currentTime / duration;
    this.setState({
      progress: progress,
      leftTime: duration - currentTime
    });
  }

  end() {
    this.handleNext();
  }

  handleAdjustVolume(e) {
    const volumeContainer = this.volumeContainer;
    let volume =
      (e.clientX - volumeContainer.getBoundingClientRect().left) /
      volumeContainer.clientWidth;
    volume = volume < 0 ? 0 : volume;
    this.audioContainer.volume = volume;
    this.setState({
      volume: volume
    });
  }

  handleAdjustProgress(e) {
    const progressContainer = this.progressContainer;
    const progress =
      (e.clientX - progressContainer.getBoundingClientRect().left) /
      progressContainer.clientWidth;
    const currentTime = this.audioContainer.duration * progress;
    this.audioContainer.currentTime = currentTime;
    this.setState(
      {
        play: true,
        progress: progress
      },
      () => {
        this.audioContainer.play();
      }
    );
  }

  handleToggle() {
    this.state.play ? this.audioContainer.pause() : this.audioContainer.play();
    this.setState({ play: !this.state.play });
  }

  handleSelect(index) {
    this._playMusic(index);
  }

  handlePrev() {
    const { activeMusicIndex } = this.state;
    const total = this.props.playlist.length;
    const index = activeMusicIndex > 0 ? activeMusicIndex - 1 : total - 1;
    this._playMusic(index);
  }

  handleNext() {
    const { activeMusicIndex } = this.state;
    const total = this.props.playlist.length;
    const index = activeMusicIndex < total - 1 ? activeMusicIndex + 1 : 0;
    this._playMusic(index);
  }

  _playMusic(index) {
    this.setState(
      {
        activeMusicIndex: index,
        leftTime: 0,
        play: true,
        progress: 0
      },
      () => {
        this.audioContainer.currentTime = 0;
        this.audioContainer.play();
      }
    );
  }

  _formatTime(time) {
    if (isNaN(time) || time === 0) {
      return;
    }
    const mins = Math.floor(time / 60);
    const secs = (time % 60).toFixed();
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  render() {
    const { playlist, accent, pictureSrc, headerAndIconClr } = this.props;
    const { activeMusicIndex } = this.state;
    const activeMusic = playlist[activeMusicIndex];
    const progressStyle = {
      width: `${this.state.progress * 100}%`,
      backgroundColor: accent
    };

    const storeItems = playlist.map(track => (
      <div key={track.title}>
        <div
          className="store-item"
          onClick={() => this.handleSelect(playlist.indexOf(track))}
          style={{
            backgroundColor:
              this.state.activeMusicIndex === playlist.indexOf(track) &&
              "#cccccc"
          }}
        >
          <div className="store-item-left">
            <p className="track-title">{track.title}</p>
          </div>
          <div className="store-item-right">
            <span className="track-artist">{track.artist}</span>
          </div>
        </div>
        <hr />
      </div>
    ));

    return (
      <div className="store-container">
        <audio
          autoPlay={this.state.play}
          preload="auto"
          ref={ref => {
            this.audioContainer = ref;
          }}
          src={activeMusic.url}
        />
        <div
          className="store-header"
          style={{ backgroundColor: headerAndIconClr }}
        >
          <div className="store-header-left">
            <img className="store-logo" src={pictureSrc} alt="logo" />
          </div>
          <div className="store-header-right">
            <p className="player-info">{`Total Songs: ${playlist.length}  `}</p>
          </div>
        </div>
        <div className="beats-container">{storeItems}</div>
        <div className="player-controls" style={{ borderColor: accent }}>
          <div className="controls-container" />
          <i
            className="icon fa fa-step-backward control-icon"
            style={{ color: headerAndIconClr }}
            onClick={this.handlePrev.bind(this)}
          />
          <i
            className={`icon fa fa-${
              this.state.play ? "pause" : "play"
            } control-icon`}
            style={{ color: headerAndIconClr }}
            onClick={this.handleToggle.bind(this)}
          />
          <i
            className="icon fa fa-step-forward control-icon"
            style={{ color: headerAndIconClr }}
            onClick={this.handleNext.bind(this)}
          />
          <div className="volume-container">
            <div className="volume-icon">
              <i
                className="icon fa fa-volume-up"
                style={{ color: headerAndIconClr }}
              />
            </div>
            <div className="volume-wrapper">
              <div
                className="progress-container"
                onClick={this.handleAdjustVolume.bind(this)}
                ref={ref => {
                  this.volumeContainer = ref;
                }}
              >
                <div
                  className="progress"
                  style={{
                    width: `${this.state.volume * 100}%`,
                    backgroundColor: accent
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="progress-container track-progress"
            onClick={this.handleAdjustProgress.bind(this)}
            ref={ref => {
              this.progressContainer = ref;
            }}
          >
            <div className="progress" style={progressStyle} />
            <div className="left-time">
              <div className="t currently-playing">
                {this.state.leftTime > 0
                  ? playlist[this.state.activeMusicIndex].title
                  : ""}
              </div>
              -{this._formatTime(this.state.leftTime)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicStore;
