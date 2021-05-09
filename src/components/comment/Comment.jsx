import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNewComment } from "../../action/commentAction";
import { timeFormatter, ViewsFormatter } from "../../utils/util";

import "./Comment.css";
import "../../common.css";

const Comment = () => {
  const dispatch = useDispatch();
  const authorDisplayName = "Sayan Maity";
  const authorProfileImageUrl = `https://ui-avatars.com/api/?name=Sayan+Maity&size=48&background=random`;

  const commentThreads = useSelector((state) => state.commentReducer.comments);
  const commentCount = useSelector(
    (state) => state.commentReducer.commentCount
  );

  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");

  useEffect(() => {
    const sortedComments = [...commentThreads];
    sortedComments.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
    setComments(sortedComments);
  }, [commentThreads]);

  const handleChange = (e) => {
    setAddComment(e.target.value);
  };
  const resetComment = () => {
    setAddComment("");
  };

  const handleComment = (e) => {
    e.preventDefault();
    const date = new Date().toISOString();
    const publishedAt = date;
    const data = {
      textOriginal: addComment,
      publishedAt: publishedAt,
      authorDisplayName: authorDisplayName,
      authorProfileImageUrl: authorProfileImageUrl,
    };

    dispatch(addNewComment(data));
    setAddComment("");
  };

  return (
    <React.Fragment>
      <h5 className="comment-count">{ViewsFormatter(commentCount)} Comments</h5>

      {comments[0] === "Comments are Disabled" ? (
        ""
      ) : (
        <div className="comment-header">
          <div className="signed-user-img">
            <i
              className="fas fa-user-circle"
              style={{ fontSize: "4.8rem" }}
            ></i>
          </div>
          <form className="post-comment">
            <div className="comment-input-text-box">
              <input
                type="text"
                className="comment-input"
                placeholder="Add a comment"
                name="addComment"
                onChange={handleChange}
                value={addComment}
                required
              />
            </div>
            <div className="comment-disclaimer-and-buttons">
              <span className="yt-t-c yt-text-secondary">
                By completing this action you are creating a channel​ and agree
                to YouTube's Terms of Service​.
              </span>
              <div className="comment-action-buttons">
                <button
                  type="reset"
                  className="comment-cancel yt-text-secondary"
                  onClick={resetComment}
                >
                  CANCEL
                </button>
                <button
                  disabled={!addComment}
                  type="submit"
                  className="comment-submit"
                  onClick={handleComment}
                >
                  COMMENT
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="comment-body-list">
        <ul>
          {comments[0] === "Comments are Disabled" ? (
            <div>Comments Are Disabled</div>
          ) : (
            comments.map((comment) => (
              <li className="comment-body" key={comment.publishedAt}>
                <div className="user-pic">
                  <img
                    className="comment-user-pic"
                    src={comment.authorProfileImageUrl}
                    alt="User Account"
                  />
                </div>
                <div className="main-comment">
                  <span className="yt-text-primary author-name-text">
                    {comment.authorDisplayName}
                  </span>
                  <span className="yt-text-secondary time-formatter">
                    {timeFormatter(
                      (new Date() - new Date(comment.publishedAt)) / 1000
                    )}{" "}
                    ago
                  </span>
                  <p
                    className="yt-text-primary"
                    style={{ fontSize: "1.3rem", padding: "4px" }}
                  >
                    {comment.textOriginal}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Comment;
