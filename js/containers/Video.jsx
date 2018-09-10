import React from 'react'

// class Video extends Component {
//    return (
//        <div>
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/WaQewDoipQQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//     </div>
//    )
// }

const Video = (props) => {
    const {tweet} = props;
    return (
        <div id="video">
            <h4 style={{color: 'white'}}>Mark Ruffalo explains the crisis in Yemen:</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WaQewDoipQQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div id="share-button-container">
                <div className="social-media">
                    <div className="button-share">
                        <a className="twitter" href={`https://twitter.com/intent/tweet?text=${tweet}`} target="_blank">
                            <img src="images/twitter_white.svg" />
                            <span>Share on twitter</span>
                        </a>
                    </div>
                    <div className="button-share">
                        <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://stopthewar.us/" target="_blank">
                            <img src="images/facebook_white.svg" />
                            <span>Share on facebook</span>
                        </a>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Video