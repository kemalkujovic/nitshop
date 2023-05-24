import React, { useEffect, useState } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { fetchAllComments } from "../../api/userApi";

const BlogScreen = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [displayComment, setDisplayComment] = useState(false);
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => {
              return (
                <li>
                  <button onClick={showComments}>{id}</button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </SimplifiedDiv>
      {displayComment && displayComment.map((el) => <div>{el.name}</div>)}
    </>
  );
};

export default BlogScreen;
