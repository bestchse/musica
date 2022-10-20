import React, { Component } from 'react'
import YouTube from 'react-youtube';

export class Test extends Component {
    constructor() {
        super();
        this.state = {
            Data: [
                {
                    Key: 1,
                    VideoId: "Xlyi_8Z2tFU",
                    VideoName: "ร้องเพลงฟังสบายชิลๆ ผ่อนคลายไปพร้อมกัน",
                    MusicName: "Please",
                    MusicTime: 4838,
                    Band: "Atom ชนกันต์",
                    FullUrl: "https://www.youtube.com/watch?v=Xlyi_8Z2tFU&t=4838s",
                },
                {
                    Key: 2,
                    VideoId: "Xlyi_8Z2tFU",
                    VideoName: "ร้องเพลงฟังสบายชิลๆ ผ่อนคลายไปพร้อมกัน",
                    MusicName: "ธรรมดาที่แสนพิเศษ",
                    MusicTime: 5537,
                    Band: "ANATOMY RABBIT",
                    FullUrl: "https://youtu.be/Xlyi_8Z2tFU?t=5537",
                },
            ],
            Play: {
                VideoId: null,
                Options: {
                    height: '100',
                    width: '200',
                    playerVars: {
                        start: null,
                        autoplay: 1,
                        controls: 0
                    }
                }
            }
        };
    }
    play(Key) {
        this.setState({
            Play: {
                VideoId: this.state.Data[Key - 1].VideoId,
                Options: {
                    height: '100',
                    width: '200',
                    playerVars: {
                        start: this.state.Data[Key - 1].MusicTime,
                        autoplay: 1,
                        controls: 0
                    }
                }
            }
        })
    }

    render() {
        console.log(this.state.Play)
        return (
            <div>
                <YouTube videoId={this.state.Play.VideoId} opts={this.state.Play.Options} />
                {
                    this.state.Data.map(data =>
                        <div key={data.Key}>
                            {/* <p>{data.VideoName}</p> */}
                            <a onClick={() => this.play(data.Key)}>{data.Band} - {data.MusicName}</a>
                            {/* <YouTube videoId={data.VideoId} opts={data.YoutubePlayer} /> */}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Test