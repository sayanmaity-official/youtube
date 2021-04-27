import React from "react";
import "./Comment.css";
const Comment = () => {
  return (
    <React.Fragment>
      <h5 className="comment-count">145 Comments</h5>
      <div className="comment-header">
        <i className="fas fa-user-circle fa-3x"></i>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment"
        />
      </div>
      <div className="comment-body-list">
        <ul>
          {/* @todo map to CommentItem */}
          <li className="comment-body">
            <div className="user-pic">
              <img
                className="comment-user-pic"
                src="https://picsum.photos/50"
                alt="User Account"
              />
            </div>
            <div className="main-comment">
              <span className="yt-primary-text p-2">Niraj Mahale</span>
              <span className="yt-secondary-text p-2">3 months ago</span>
              <p className="yt-comment-text p-2">
                Just found out after watching Pixar's Popcorn trailer Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Numquam
                mollitia autem exercitationem quidem in unde porro, voluptatibus
                rerum atque praesentium ab laborum est magnam, officia soluta
                provident necessitatibus blanditiis hic minus ipsam earum.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Comment;
