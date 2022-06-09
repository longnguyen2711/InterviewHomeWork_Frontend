import {
  commentAction,
  postAction,
  userAction,
} from "../../../../redux/actions/AccountAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./DetailPost.scss";

export default function DetailPost(props) {
  const { post, account, postComment } = useSelector(
    (state) => state.AccountReducer
  );

  const dispatch = useDispatch();

  console.log(account);

  useEffect(() => {
    dispatch(postAction(props.match.params.idpost));
    dispatch(userAction(props.match.params.iduser));
    dispatch(commentAction(props.match.params.idpost));
  }, []);

  return (
    <section id="detailpost">
      <div className="detailpost__header position-relative ">
        {post.map((pst, index) => {
          return (
            <div key={index}>
              {account.map((user, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <h1 className="ml-3">Logo</h1>
                    <h1>Blogs number {pst.id} </h1>
                    <h1 className="mr-3">{user.username}</h1>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="detailpost__content">
        {post.map((pst, index) => {
          return (
            <div key={index}>
              {account.map((user, index) => {
                return (
                  <div key={index}>
                    <h1 className="text-center my-5">{pst.title}</h1>
                    <p className="font-weight-bold">
                      Author:{" "}
                      <span className="font-weight-normal">{user.name}</span>
                    </p>
                    <p className="font-weight-bold">
                      Email:{" "}
                      <span className="font-weight-normal">{user.email}</span>
                    </p>
                    <p className="font-weight-bold">
                      Created at:{" "}
                      <span className="font-weight-normal">June 09, 2022</span>
                    </p>
                    <p className="text-justify">{pst.body}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="detailpost__comment mt-5">
        <h1>{postComment.length} replies</h1>
        <hr />
        <div className="comment">
          <nav className="navbar navbar-expand-xs navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Show comment
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {postComment.map((comment, index) => {
                  return (
                    <li className="nav-item">
                      {" "}
                      <div key={index} className="d-flex mb-4">
                        <div className="avatar">
                          <img src="http://picsum.photos/1000" alt="..." />
                        </div>
                        <div className="content d-flex flex-column align-items-start justify-content-between">
                          <div>
                            <h1>
                              {comment.name} (
                              <span>
                                <i>{comment.email}</i>
                              </span>
                              )
                            </h1>
                            <p>{comment.body}</p>
                          </div>
                          <button title="Repply to">Repply to</button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
