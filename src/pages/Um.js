import React, { Component } from "react";
import YouTube from "react-youtube";
import Playlist from "../datajson/playlist.json";

import { Container, Row, Col } from "react-bootstrap";

export class Um extends Component {
    constructor() {
        super();
        this.state = {
            YoutubePlayer: {
                VideoId: 'HeraLYDENSI',
                Options: {
                    height: '260',
                    width: '100%',
                    playerVars: {
                        autoplay: 1,
                        origin: 'http://localhost:3000'
                    }
                }
            },
            Search: '',
            Playlist: Playlist.Data,
            QueuePlaylist: []
        }
    }
    onEnd() {
        console.log('onEnd')
    }
    onReady() {
        console.log('onReady')
    }
    onPlay() {
        console.log('onPlay')
    }
    onStateChange() {
        console.log('onStateChange')
    }
    onPause() {
        console.log('onPause')
    }

    PlayMusic(data) {
        console.log('PlayMusic')
        console.log(data)
        let MusicStart = this.ConvertTime(data.MusicTimeStart)
        let MusicEnd = this.ConvertTime(data.MusicTimeEnd)
        let VideoId = data.VideoId
        this.setState({
            YoutubePlayer: {
                VideoId: VideoId,
                Options: {
                    height: '260',
                    width: '100%',
                    playerVars: {
                        start: MusicStart,
                        end: MusicEnd,
                        autoplay: 1,
                        origin: 'http://localhost:3000'
                    }
                }
            }
        })
    }
    ClearQueue() {
        console.log('ClearQueue')
        this.setState({
            QueuePlaylist: this.state.QueuePlaylist.slice(1)
        })
        setTimeout(() => {
            this.PlayQueue()
        }, 2000);
    }
    NextQueue() {
        console.log('NextQueue')
        let MusicStart = this.ConvertTime(this.state.QueuePlaylist[0].MusicTimeStart)
        let MusicEnd = this.ConvertTime(this.state.QueuePlaylist[0].MusicTimeEnd)
        setTimeout(() => {
            this.ClearQueue()
        }, (MusicEnd - MusicStart) * 1000);
    }
    PlayQueue() {
        console.log('PlayQueue')
        console.log(this.state.QueuePlaylist)
        this.PlayMusic(this.state.QueuePlaylist[0])
        if (this.state.QueuePlaylist.length != 1) {
            this.NextQueue()
        } else {
            console.log('LastQueue')
        }
    }
    AddQueue(data) {
        console.log('AddQueue')
        this.setState({
            QueuePlaylist: [...this.state.QueuePlaylist, data]
        })
    }
    DeleteQueue(data, id) {
        console.log('DeleteQueue')
        let newdata = this.state.QueuePlaylist.filter((data, idx) => !(id === idx));
        this.setState({
            QueuePlaylist: newdata
        })
    }
    AddAllQueue() {
        console.log('AddAllQueue')
        this.setState({
            QueuePlaylist: this.state.Playlist
        })
    }
    ClearAllQueue() {
        console.log('ClearAllQueue')
        this.setState({
            QueuePlaylist: []
        })
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

    render() {
        let SearchData = this.state.Playlist.filter(data => {
            return data.MusicName.toLowerCase().includes(this.state.Search.toLowerCase())
        })
        return (
            <Container>
                <Row md="12" xs="12">
                    <YouTube
                        videoId={this.state.YoutubePlayer.VideoId}
                        opts={this.state.YoutubePlayer.Options}
                    // onEnd={this.onEnd()}
                    // onReady={this.onReady()}
                    // onPlay={this.onPlay()}
                    // onStateChange={this.onStateChange()}
                    // onPause={this.onPause()}
                    />
                </Row>
                <input
                    placeholder="Search"
                    value={this.state.Search}
                    onChange={(e) => this.setState({ Search: e.target.value })}
                    type="text"
                />
                <Container>
                    <Row>
                        <Col md="4" xs="4">
                            <p onClick={() => this.PlayQueue()}>PlayQueue</p>
                        </Col>
                        <Col md="4" xs="4">
                            <p onClick={() => this.AddAllQueue()}>AddAllQueue</p>
                        </Col>
                        <Col md="4" xs="4">
                            <p onClick={() => this.ClearAllQueue()}>ClearAllQueue</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" xs="6">
                            <p>Playlist</p>
                            <div className="overflow-scroll" style={{ height: 500 }}>
                                {SearchData.map((data, idx) => (
                                    <div key={data.Key}>
                                        <Row>
                                            <Col md="10" xs="8">
                                                <p onClick={() => this.PlayMusic(data)}>
                                                    {data.Band} - {data.MusicName}
                                                </p>
                                            </Col>
                                            <Col md="2" xs="4">
                                                <p onClick={() => this.AddQueue(data)}>+</p>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col md="6" xs="6">
                            <Row>
                                <Col md="12" xs="12">
                                    <p>Queue</p>
                                </Col>
                            </Row>
                            <div className="overflow-scroll" style={{ height: 500 }}>
                                {this.state.QueuePlaylist.map((data, idx) => (
                                    <div key={idx}>
                                        <Row>
                                            <Col md="10" xs="8">
                                                {data.Band} - {data.MusicName}
                                            </Col>
                                            <Col md="2" xs="4">
                                                <p onClick={() => this.DeleteQueue(data, idx)}>x</p>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}
export default Um;
