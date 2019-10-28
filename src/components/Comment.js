import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment-container">
      <div>
        <div className="profile-photo" style={{ backgroundImage: `url(${comment.author.avatar})` }} />
      </div>
      <div className="comment-box">
        <span id="comment-name">{comment.author.name} <span id="comment-text">{comment.content}</span></span>
      </div>
    </div>
  )
}

export default Comment;