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
                    height: '260',
                    width: '100%',
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
                    height: '260',
                    width: '100%',
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

    NextQueue(id) {
        let newdata = this.state.PlaylistQueue.filter((data, idx) => !(id === idx));
        this.setState({
            PlaylistQueue: newdata
        })
        this.setZero()
    }

    setZero = () => {
        this.setState({
            Player: {
                VideoId: null,
                Options: {
                    height: '260',
                    width: '100%',
                    playerVars: {
                        start: null,
                        autoplay: 1,
                        controls: 1
                    }
                }
            }
        })
        setTimeout(() => {
            if (this.state.PlaylistQueue.length !== 0)
                this.PlayQueue(0)
        }, 1000);

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
                    height: '260',
                    width: '100%',
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
            this.NextQueue(Idx)
        }, (MusicEnd - MusicStart) * 1000);

    }

    render() {
        let newdata = this.state.Playlist.filter(data => {
            return data.MusicName.toLowerCase().includes(this.state.SearchValue.toLowerCase())
        })
        return (
            <Container>
                <Row col md="12" xs="12">
                    <YouTube
                        videoId={this.state.Player.VideoId}
                        opts={this.state.Player.Options}
                        onEnd={() => this.PlayQueue(0)}
                    />
                </Row>
                <input
                    placeholder='Search'
                    value={this.state.SearchValue}
                    onChange={e => this.Search(e.target.value)}
                    type='text'
                />
                <Container>
                    <Row>
                        <Col md="6" xs="6">
                            <p>Playlist</p>
                            <div className="overflow-scroll" style={{ height: 500 }}>
                                {
                                    newdata.map((data, idx) =>
                                        <div key={data.Key}>
                                            <Row>
                                                <Col md="10" xs="8">
                                                    <p onClick={() => this.PlayMusic(data.Key)}>{data.Band} - {data.MusicName}</p>
                                                </Col>
                                                <Col md="2" xs="4">
                                                    <p onClick={() => this.AddQueue(data)}>+</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                }
                            </div>
                        </Col>
                        <Col md="6" xs="6">
                            <Row>
                                <Col md="10" xs="8">
                                    <p>Queue</p>
                                </Col>
                                <Col md="2" xs="4">
                                    <p onClick={() => this.PlayQueue(0)}>Play</p>
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
                                                <Col md="2" xs="4">
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