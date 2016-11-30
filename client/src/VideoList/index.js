import React from 'react';
import VideoContainer from '../VideoContainer';

/** VideoList
 * a collection of VideoContainer components.
 * usage: <VideoList list={[video1, video2, video3]} />
 * each videoN above is the video from the database to pass to a Video component.
 */
const VideoList = function(props) {
  return (
    <div className='video-list'>
      {props.list.map((video, i) => (
        <VideoContainer key={video.vodId + video.highlightStart} video={video} username={props.username} emotes={props.emotes} dbHandleVote={props.dbHandleVote}/>
      ))}
    </div>
  );
};

VideoList.propTypes = {
  list: React.PropTypes.array.isRequired,
  emotes: React.PropTypes.object.isRequired,
  username: React.PropTypes.string,
  dbHandleVote: React.PropTypes.func
};

export default VideoList;
