import React, { Component } from 'react'
import YouTube from 'react-youtube';
import Playlist from '../datajson/playlist.json'

export class Test extends Component {
    constructor() {
        super();
        this.state = {
            Playlist: Playlist.Data,
            Player: {
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
            },
            SearchValue: "",
        };
    }

    ConvertTime(Time) {
        let hms = Time;
        let separate = hms.split(':');
        let seconds = (+separate[0]) * 60 * 60 + (+separate[1]) * 60 + (+separate[2]);
        return seconds
    }

    PlayMusic(Key) {
        let MusicStart = this.ConvertTime(this.state.Playlist[Key - 1].MusicTimeStart)
        let MusicEnd = this.ConvertTime(this.state.Playlist[Key - 1].MusicTimeEnd)

        this.setState({
            Player: {
                VideoId: this.state.Playlist[Key - 1].VideoId,
                Options: {
                    height: '100',
                    width: '200',
                    playerVars: {
                        start: MusicStart,
                        end: MusicEnd,
                        autoplay: 1,
                        controls: 0
                    }
                }
            }
        })
    }

    Search = (event) => {
        this.setState({
            SearchValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <YouTube videoId={this.state.Player.VideoId} opts={this.state.Player.Options} />
                <div>
                    <p>{this.state.SearchValue}</p>
                    <p>
                        <input placeholder='Search' value={this.state.SearchValue} onChange={this.Search}></input>
                    </p>
                </div>
                {
                    this.state.Playlist.map(data =>
                        <div key={data.Key}>
                            <a onClick={() => this.PlayMusic(data.Key)}>{data.Band} - {data.MusicName}</a>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Test