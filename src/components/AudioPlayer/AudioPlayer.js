import React, { Component } from 'react';

import Util from './util';
import PauseIcon from '../../assets/images/pause.svg';
import PlayIcon from '../../assets/images/play.svg';

import cls from './AudioPlayer.module.css';


export default class AudioPlayer extends Component {
  constructor(props, ref) {
    super(props);
    this.audioPlayerRef = React.createRef();
    this.progressBarDetailRef = React.createRef();
    this.ref = ref;
  }

  static defaultProps = {
    onPlaying: () => {},
    onPause: () => {},
    autoplay: false,
    loop: false,
    preload: 'metadata',
    pauseIcon: PlayIcon,
    playingIcon: PauseIcon,
  };

  state = {
    currentTime: '00:00',
    duration: '00:00',
    currentTimeNum: 0,
    durationNum: 1,
    bufferedPercent: 0,
    playSrc: PlayIcon,
  };

  audioPlayPause = () => {
    const self = this.audioPlayerRef.current;
    if (self.paused) {
      self.play();
    } else {
      self.pause();
    }
  };

  audioPlay() {
    const self = this.audioPlayerRef.current;
    self.play();
  }

  audioPause() {
    const self = this.audioPlayerRef.current;
    self.pause();
  }

  canplayHandle = () => {
    this.setState({
      durationNum: this.audioPlayerRef.current.duration,
      duration: Util.timeFormat(this.audioPlayerRef.current.duration),
    });
  };

  timeUpdateHandle = () => {
    let audioPlayer = this.audioPlayerRef.current;
    let ct = audioPlayer.currentTime;
    let dt = audioPlayer.duration;
    if (ct <= dt) {
      this.setState({
        currentTimeNum: ct,
        currentTime: Util.timeFormat(ct),
      });
    }

    if (audioPlayer.paused) {
      this.setState({
        playSrc: this.props.pauseIcon,
      });
    } else {
      this.setState({
        playSrc: this.props.playingIcon,
      });
    }
  };

  progressBarClickHandle = (e) => {
    const ev = e.nativeEvent;
    const offset = ev.layerX || ev.offsetX;
    const progressBarDetail = this.progressBarDetailRef.current;
    const barWidth = progressBarDetail.offsetWidth;
    let curTime = (offset / barWidth) * this.state.durationNum;
    this.setState({
      currentTimeNum: curTime,
      currentTime: Util.timeFormat(curTime),
    });
    this.audioPlayerRef.current.currentTime = curTime;
  };

  render() {
    const {
      url,
      title,
      subtitle,
      loop,
      onPlaying,
      onPause,
      preload,
      autoplay,
    } = this.props;
    const {
      duration,
      currentTime,
      durationNum,
      currentTimeNum,
      bufferedPercent,
      playSrc,
    } = this.state;

    return (
      <div className={cls.AudioPlayerWrapper}>
        <audio
          className='wx-audio-content'
          ref={this.audioPlayerRef}
          preload={preload}
          autoPlay={autoplay}
          onPlaying={onPlaying}
          onPause={onPause}
          onCanPlay={this.canplayHandle}
          onTimeUpdate={this.timeUpdateHandle}
          src={url}
          loop={loop}
        ></audio>
        <div className={cls.PlayerBody}>
          <div className={cls.BodyLeft}>
            <div>
              <img
                onClick={this.audioPlayPause}
                className='wx-audio-state'
                src={playSrc}
                alt='audio player'
              />
            </div>
          </div>
          <div className={cls.BodyRight}>
            <p className={cls.AudioTitle}>{title}</p>
            <p className={cls.AudioSubtitle}>{subtitle}</p>
            <div className={cls.AudioProgressBarWrapper}>
              <div
                className={cls.ProgressBarDetail}
                onClick={this.progressBarClickHandle}
                ref={this.progressBarDetailRef}
              >
                <div
                  className='progress-bar-buffer'
                  style={{ width: bufferedPercent + '%' }}
                ></div>
                <div
                  className={cls.ProgressBarCurrent}
                  style={{
                    width: `calc((${currentTimeNum}/${durationNum})*100%)`,
                  }}
                ></div>
                <span className='progress-bar-loading'>
                  <span className='loading-line'></span>
                </span>
              </div>
              <div
                className={cls.ProgressBarDragPoint}
                style={{
                  left: `calc((${currentTimeNum}/${durationNum})*100%)`,
                }}
              ></div>
            </div>
            <div className={cls.AudioTimeAndControls}>
              <span className={cls.CurrentTime}>{currentTime}</span>
              <span className={cls.DurationTime}>{duration}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
