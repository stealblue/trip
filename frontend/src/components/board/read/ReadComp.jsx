import React, { useState } from "react";
import styled from "styled-components";
import { TitleComp } from "../../common/TitleComp";
import Responsive from "../../common/ResponsiceComp";
import ReplyWriteComp from "../reply/ReplyWriteComp";
import ReplyReadComp from "../reply/ReplyReadComp";
import { likePost } from "../../../lib/api/posts";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ReadContainer = styled.div`
  text-align: left;
  border-bottom: 2px solid #333;
  padding: 13px 25px;
  margin-top: 50px;

  .id {
    font-weight: 400;
    font-size: 16px;
    margin-top: 20px;
  }

  .likeandcnt {
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }

  .likeandcnt p {
    margin-left: 20px;

    .icon {
      margin-right: 5px;
    }
  }
  button {
    width: 100px;
    height: 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
  margin-top: 20px;
  font-size: 18px;
`;

const ReadComp = ({ post, error, loading, actionButtons, onlike, user }) => {
  console.log("post.like ==========================================>", post);
  console.log("user =====<>", user);
  // const test = post.like;
  const [isLlike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const dispatch = useDispatch();

  const likeButton = (e) => {
    // setLike(like + 1);
    // console.log("like00000000000000", e.target);
    if (!isLlike) {
      setLikeCount(parseInt(e.target.value) + 1);
      setIsLike(true);
      console.log("setLikeCount===>", e.target.value);
    } else {
      setLikeCount(parseInt(e.target.value));
      setIsLike(false);
    }
    // const id = user.id;
    // const no = post.no;
    likePost({ id: user.id, no: post.no });
  };

  // console.log(like);

  if (error) {
    if (error.response && error.response.status === 404) {
      return <div>존재하지않는포스트입니다</div>;
    }
    return <div>오류발생</div>;
  }

  if (loading || !post) {
    return null;
  }

  // console.log("BoardRead====>", post.title);
  return (
    <>
      <Responsive>
        <ReadContainer>
          <TitleComp>{post.title}</TitleComp>
          <p className="id">{post.id}</p>
          <div className="likeandcnt">
            <p>
              <FontAwesomeIcon className="icon" onClick={likeButton} icon={faHeart} data-id={post.id} data-no={post.no} />
              {likeCount === 0 ? parseInt(post.like) : likeCount}
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faEye} style={{ color: "#000000" }} />
              {post.cnt}
            </p>
          </div>
        </ReadContainer>
        <Content>
          <p>{post.content}</p>
        </Content>
        {actionButtons}
      </Responsive>
    </>
  );
};

export default ReadComp;
