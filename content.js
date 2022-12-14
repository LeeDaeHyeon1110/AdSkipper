if (document.location.host == "www.youtube.com") {
    setInterval(() => {
        const video = document.querySelector("#movie_player > div.html5-video-container > video");
        if (video) {
            // move ad duration bar to end
            const progressBar = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div > div.ytp-progress-list > div.ytp-play-progress.ytp-swatch-background-color");
            if (progressBar) {
                if (window.getComputedStyle(progressBar).backgroundColor === "rgb(255, 204, 0)") {
                    video.currentTime = video.duration
                }
            }
            
            document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0]?.click() // click close button for ad skip
            document.getElementsByClassName("ytp-ad-overlay-close-button")[0]?.click() // click close button for ad popup

        }
    }, 100);
}