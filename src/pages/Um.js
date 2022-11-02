import React, { Component } from "react";
import YouTube from "react-youtube";
import Playlist from "../datajson/playlist.json";
import '../App.css';

import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

export class Um extends Component {
    constructor() {
        super();
        this.state = {
            YoutubePlayer: {
                VideoId: '-wpS87yLcYw',
                Options: {
                    height: '260',
                    width: '100%',
                    playerVars: {
                        autoplay: 0,
                        // origin: 'http://localhost:3000'
                        origin: 'https://bestchse.github.io'
                    }
                }
            },
            Search: '',
            Playlist: Playlist.Data,
            QueuePlaylist: [],
            Autoplay: false
        }
    }
    onEnd() {
        // console.log('onEnd')
    }
    onReady() {
        // console.log('onReady')
    }
    onPlay() {
        // console.log('onPlay')
    }
    onStateChange() {
        // console.log('onStateChange')
    }
    onPause() {
        // console.log('onPause')
    }

    PlayMusic(data) {
        // console.log('PlayMusic')
        // console.log(data)
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
                        autoplay: this.state.Autoplay === true ? 1 : 0,
                        // origin: 'http://localhost:3000'
                        origin: 'https://bestchse.github.io'
                    }
                }
            }
        })
    }
    ClearQueue(id) {
        // console.log('ClearQueue')
        let newdata = null
        if (id === undefined) {
            newdata = this.state.QueuePlaylist.slice(1)
        } else {
            newdata = this.state.QueuePlaylist.filter((data, idx) => !(id === idx));
        }
        this.setState({
            // QueuePlaylist: this.state.QueuePlaylist.slice(1),
            QueuePlaylist: newdata,
            YoutubePlayer: {
                VideoId: null,
                Options: {
                    height: '260',
                    width: '100%',
                    playerVars: {
                        start: null,
                        end: null,
                        autoplay: this.state.Autoplay === true ? 1 : 0,
                        origin: 'http://localhost:3000'
                    }
                }
            }
        })
        setTimeout(() => {
            this.PlayQueue()
        }, 1000);
    }
    NextQueue(id) {
        // console.log('NextQueue')
        if (this.state.QueuePlaylist.length !== 0) {
            // let MusicStart = this.ConvertTime(this.state.QueuePlaylist[0].MusicTimeStart)
            // let MusicEnd = this.ConvertTime(this.state.QueuePlaylist[0].MusicTimeEnd)
            // setTimeout(() => {
            this.ClearQueue(id)
            // }, (MusicEnd - MusicStart) * 1000);
        }
    }
    PlayQueue() {
        // console.log('PlayQueue')
        // console.log(this.state.QueuePlaylist)
        if (this.state.QueuePlaylist.length !== 0) {
            this.PlayMusic(this.state.QueuePlaylist[0])
        }
        // if (this.state.QueuePlaylist.length != 1) {
        //     this.NextQueue()
        // } else {
        //     // console.log('LastQueue')
        // }
    }
    AddQueue(data) {
        // console.log('AddQueue')
        this.setState({
            QueuePlaylist: [...this.state.QueuePlaylist, data]
        })
    }
    DeleteQueue(data, id) {
        // console.log('DeleteQueue')
        // let newdata = this.state.QueuePlaylist.filter((data, idx) => !(id === idx));
        // this.setState({
        //     QueuePlaylist: newdata
        // })
        setTimeout(() => {
            this.NextQueue(id)
        }, 1000);

    }
    AddAllQueue() {
        // console.log('AddAllQueue')
        let ShuffleData = [...this.state.Playlist]
        ShuffleData = ShuffleData.sort(() => Math.random() - 0.5)
        this.setState({
            QueuePlaylist: ShuffleData
        })
    }
    ClearAllQueue() {
        // console.log('ClearAllQueue')
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
            <Container fluid style={{ height: '150vh' }}>
                <Row md="12" xs="12" style={{ padding: 10 }}>
                    <YouTube
                        videoId={this.state.YoutubePlayer.VideoId}
                        opts={this.state.YoutubePlayer.Options}
                        onEnd={() => this.NextQueue()}
                    // onEnd={this.onEnd()}
                    // onReady={this.onReady()}
                    // onPlay={this.onPlay()}
                    // onStateChange={this.onStateChange()}
                    // onPause={this.onPause()}
                    />
                </Row>
                <Container>
                    <Row md="12" xs="12" style={{ padding: 10 }}>
                        <Col md="10" xs="10">
                            <Form.Control
                                placeholder="Search"
                                value={this.state.Search}
                                onChange={(e) => this.setState({ Search: e.target.value })}
                                type="text"
                                style={{ textAlign: 'center', backgroundColor: '#181818', color: 'white', width: '100%' }}
                            />
                        </Col>
                        <Col md="2" xs="2">
                            <Button active={this.state.Autoplay} variant="outline-secondary" size="sm" onClick={() => this.setState({ Autoplay: !this.state.Autoplay })}>Autoplay</Button>
                        </Col>

                    </Row>
                </Container>

                <Container>
                    <Row md="12" xs="8">
                        <Col md="4" xs="4">
                            <Button variant="outline-secondary" size="sm" onClick={() => this.PlayQueue()}>PlayQueue</Button>
                        </Col>
                        <Col md="4" xs="4">
                            <Button variant="outline-secondary" size="sm" onClick={() => this.AddAllQueue()}>AddAllQueue</Button>
                        </Col>
                        <Col md="4" xs="4">
                            <Button variant="outline-secondary" size="sm" onClick={() => this.ClearAllQueue()}>ClearAllQueue</Button>
                        </Col>
                    </Row>

                    <Row style={{ padding: 10 }}>
                        <Col md="6" xs="6">
                            <Card className="text-center"
                                bg={'dark'}
                                text={'white'}>
                                <Card.Header>Playlist : {SearchData.length}</Card.Header>
                                <Card.Body >
                                    <div style={{ overflow: 'scroll', height: '50vh' }}>
                                        {SearchData.map((data, idx) => (
                                            <div key={data.Key} style={{ marginTop: 5, marginBottom: 5 }}>
                                                <Row>
                                                    <Col md="10" xs="8" onClick={() => this.PlayMusic(data)} >
                                                        <div className="fontscale">
                                                            {data.Band} - {data.MusicName}
                                                        </div>
                                                    </Col>
                                                    <Col md="2" xs="4">
                                                        <p onClick={() => this.AddQueue(data)}>+</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6" xs="6">
                            <Card className="text-center"
                                bg={'dark'}
                                text={'white'}>
                                <Card.Header>Queue : {this.state.QueuePlaylist.length}</Card.Header>
                                <Card.Body>
                                    <div style={{ overflow: 'scroll', height: '50vh' }}>
                                        {this.state.QueuePlaylist.map((data, idx) => (
                                            <div key={idx} style={{ marginTop: 5, marginBottom: 5 }}>
                                                <Row>
                                                    <Col md="10" xs="8" >
                                                        <div className="fontscale">
                                                            {data.Band} - {data.MusicName}
                                                        </div>
                                                    </Col>
                                                    <Col md="2" xs="4">
                                                        <p onClick={() => this.DeleteQueue(data, idx)}>x</p>
                                                        {/* <p onClick={() => this.NextQueue()}>x</p> */}
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}
export default Um;
