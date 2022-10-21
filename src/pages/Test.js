import React, { Component } from 'react'
import YouTube from 'react-youtube';
import Playlist from '../datajson/playlist.json'

import { Container, Row, Col } from 'react-bootstrap'

export class Test extends Component {
    constructor() {
        super();
        this.state = {
            Playlist: Playlist.Data,
            Player: {
                VideoId: 'HeraLYDENSI',
                Options: {
                    height: '200',
                    width: '400',
                    playerVars: {
                        start: null,
                        autoplay: 1,
                        controls: 1
                    }
                }
            },
            SearchValue: "",
            PlaylistQueue: [],
            NextQueue: false
        };
    }

    ConvertTime(Time) {
        if (Time) {
            let hms = Time;
            let separate = hms.split(':');
            let seconds = (+separate[0]) * 60 * 60 + (+separate[1]) * 60 + (+separate[2]);
            return seconds
        } else
            return null
    }

    PlayMusic(Key) {
        let MusicStart = this.ConvertTime(this.state.Playlist[Key - 1].MusicTimeStart)
        let MusicEnd = this.ConvertTime(this.state.Playlist[Key - 1].MusicTimeEnd)

        this.setState({
            Player: {
                VideoId: this.state.Playlist[Key - 1].VideoId,
                Options: {
                    height: '200',
                    width: '400',
                    playerVars: {
                        start: MusicStart,
                        end: MusicEnd,
                        autoplay: 1,
                        controls: 1
                    }
                }
            }
        })
    }

    Search = (event) => {
        this.setState({
            SearchValue: event
        })
    }

    AddQueue(Key) {
        this.setState({
            PlaylistQueue: [...this.state.PlaylistQueue, Key]
        })
    }

    DeleteQueue(id) {
        let newdata = this.state.PlaylistQueue.filter((data, idx) => !(id === idx));
        this.setState({
            PlaylistQueue: newdata
        })

    }

    PlayQueue(Idx) {

        let MusicStart = null
        let MusicEnd = null
        MusicStart = this.ConvertTime(this.state.PlaylistQueue[Idx].MusicTimeStart)
        MusicEnd = this.ConvertTime(this.state.PlaylistQueue[Idx].MusicTimeEnd)

        this.setState({
            Player: {
                VideoId: this.state.PlaylistQueue[0].VideoId,
                Options: {
                    height: '200',
                    width: '400',
                    playerVars: {
                        start: MusicStart,
                        end: MusicEnd,
                        autoplay: 1,
                        controls: 1
                    }
                }
            }
        })
        setTimeout(() => {
            console.log('onEndFx')
            this.DeleteQueue(Idx)
        }, MusicEnd - MusicStart);

    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        console.log(event)
        event.target.playVideo();
    }

    render() {
        let newdata = this.state.Playlist.filter(data => {
            return data.MusicName.toLowerCase().includes(this.state.SearchValue.toLowerCase())
        })
        return (
            <Container>
                <YouTube
                    videoId={this.state.Player.VideoId}
                    opts={this.state.Player.Options}
                    onEnd={() => this.PlayQueue(0)}
                    // onEnd={this._onEnd}
                    onReady={this._onReady}
                    onPlay={this._onPlay}
                    onPause={this._onPause}
                />
                <input
                    placeholder='Search'
                    value={this.state.SearchValue}
                    onChange={e => this.Search(e.target.value)}
                    type='text'
                />
                <Container>
                    <Row>
                        <Col>
                            <p>Playlist</p>
                            <div className="overflow-scroll" style={{ height: 500 }}>
                                {
                                    newdata.map((data, idx) =>
                                        <div key={data.Key}>
                                            <Row>
                                                <Col md="10" xs="8">
                                                    <p onClick={() => this.PlayMusic(data.Key)}>{data.Band} - {data.MusicName}</p>
                                                </Col>
                                                <Col md="2" xs="2">
                                                    <p onClick={() => this.AddQueue(data)}>+</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                }
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col md="10">
                                    <p>Queue</p>
                                </Col>
                                <Col md="2">
                                    <p onClick={() => this.PlayQueue(0)}>PlayQueue</p>
                                </Col>
                            </Row>
                            <div className="overflow-scroll" style={{ height: 500 }}>
                                {
                                    this.state.PlaylistQueue.map((data, idx) =>
                                        <div key={idx}>
                                            <Row >
                                                <Col md="10" xs="8">
                                                    {data.Band} - {data.MusicName}
                                                </Col>
                                                <Col md="2" xs="2">
                                                    <p onClick={() => this.DeleteQueue(idx)}>x</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Test