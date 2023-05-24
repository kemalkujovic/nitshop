import React, { useEffect, useState } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { fetchAllComments } from "../../api/userApi";

const BlogScreen = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [displayComment, setDisplayComment] = useState(false);
  let filterComments = [];
  useEffect(() => {
    fetchAllComments().then((allComments) => setComments(allComments));
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
  const showComments = (e) => {
    setDisplayComment(
      comments.filter((comment) => {
        return comment.postId === +e.target.innerText;
      })
    );
  };
  return (
    <>
      <Navigation />
      <SimplifiedDiv>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
          <ul>
            <li>
              <button onClick={(e) => showComments(e)}>1</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>2</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>3</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>4</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>5</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>6</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>7</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>8</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>9</button>
            </li>
            <li>
              <button onClick={(e) => showComments(e)}>10</button>
            </li>
          </ul>
        ) : null}
      </SimplifiedDiv>
      {displayComment && displayComment.map((el) => <div>{el.name}</div>)}
    </>
  );
};

export default BlogScreen;
