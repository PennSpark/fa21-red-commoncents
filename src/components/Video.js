import React from 'react'
import YouTube from "react-youtube";
import axios from 'axios';
import M from 'materialize-css'

const Video = ({videoID, coinReward}) => {
    const opts = {
        playerVars: {
            disablekb: 1,
            controls: 0,
            modestbranding: 1,
            fs: 0,
            iv_load_policy: 3,
        }
      };

    const checkElapsedTime = (e) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.9) {
            const user = JSON.parse(localStorage.getItem("user"));
            const url = "https://young-savannah-91729.herokuapp.com/users/changeCoins"
            axios
            .post(url, {id: user._id, coins: parseInt(coinReward)})
            .then((response) => {
                    M.toast({html: response.data.message});
                })
                .catch((error) => {
                    console.log(error);
            });
        }
    };
    return (
        <div className = "video-container">
            <YouTube
                className = "video"
                videoId={videoID}
                containerClassName="embed embed-youtube"
                onStateChange={(e) => checkElapsedTime(e)}
                opts={opts}
            />
        </div>
    )
}

export default Video