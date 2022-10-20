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
        }
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
        console.log(Idx)
        let MusicStart = this.ConvertTime(this.state.PlaylistQueue[Idx].MusicTimeStart)
        let MusicEnd = this.ConvertTime(this.state.PlaylistQueue[Idx].MusicTimeEnd)

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

        this.DeleteQueue(Idx)
    }

    render() {
        let newdata = this.state.Playlist.filter(data => {
            return data.MusicName.toLowerCase().includes(this.state.SearchValue.toLowerCase())
        })
        return (
            <Container>
                <YouTube videoId={this.state.Player.VideoId} opts={this.state.Player.Options} onEnd={() => this.PlayQueue(0)} />
                <input
                    placeholder='Search'
                    value={this.state.SearchValue}
                    onChange={e => this.Search(e.target.value)}
                    type='text'
                />
                <p>{this.state.SearchValue}</p>
                <Container>
                    <Row>
                        <Col>
                            <p>Playlist</p>
                            <div className="overflow-scroll" style={{ height: 300 }}>
                                {
                                    newdata.map((data, idx) =>
                                        <div key={data.Key}>
                                            <Row>
                                                <Col md="10">
                                                    <a onClick={() => this.PlayMusic(data.Key)}>{data.Band} - {data.MusicName}</a>
                                                </Col>
                                                <Col md="2">
                                                    <a onClick={() => this.AddQueue(data)}>+</a>
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
                                    <a onClick={() => this.PlayQueue(0)}>PlayQueue</a>
                                </Col>
                            </Row>
                            <div className="overflow-scroll" style={{ height: 300 }}>
                                {
                                    this.state.PlaylistQueue.map((data, idx) =>
                                        <div key={idx}>
                                            <Row>
                                                <Col md="10">
                                                    {data.Band} - {data.MusicName}
                                                </Col>
                                                <Col md="2">
                                                    <a onClick={() => this.DeleteQueue(idx)}>-</a>
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