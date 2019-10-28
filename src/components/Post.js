import React from 'react';
import Comment from './Comment';

function Post({ data }) {
  const { author, comments, content, date } = data;
  console.log(data);
  return (
    <div className="post">
      <div className="profile-container">
        <div className="profile-photo" style={{ backgroundImage: `url(${author.avatar})` }} />
        <p>{author.name}<br />
          <small>{date}</small>
        </p>
      </div>
      <div className="content">
        <span>{content}</span>
      </div>
      <div className="line-bar" />
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  )
}

export default Post;