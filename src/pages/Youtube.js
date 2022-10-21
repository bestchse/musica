import React, { Component } from 'react'
import YouTube from 'react-youtube';



export class Youtube extends Component {

    render() {
        const opts = {
            height: '200',
            width: '400',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                origin: 'http://localhost:3000'
            },

        };
        return <YouTube videoId="92fas9w92PQ" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    onPlayerReady(event) {
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
}

export default Youtube