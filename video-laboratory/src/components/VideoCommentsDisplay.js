import PropTypes from 'prop-types'

const VideoCommentsDisplay = ({comments}) => {
    if (!comments) {
        return (
            <div></div>
        )
    }
    else {
        console.log(comments)
        return (
            <div className='video-comments-display'>
                {comments.map((comment) => (<p className='comment-display' key={comment.commentId}>{comment.text}</p>))}    
            </div>
        )
    }
}


VideoCommentsDisplay.propTypes = {
    comments: PropTypes.array
}

export default VideoCommentsDisplay