/* eslint-disable  */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button, { ButtonGroup } from "@atlaskit/button";
var votes;

const useCounter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const increment = likes =>
    dispatch({
      type: "INCREMENT",
      payload: likes
    });

  return { count, increment };
};

export default function PostUpvoter({ id }) {
  const [count, setCount] = useState(0);
  const { counte, increment } = useCounter(0);
  useEffect(() => {
    votes = localStorage.getItem(id);
    setCount(votes);
  }, []);

  const upvotePost = id => {
    localStorage.setItem(id, parseInt(count) + 1);
    increment(parseInt(count) + 1);
    setCount(parseInt(count) + 1);
  };

  return (
    <div>
      <Button
        appearance='primary'
        style={{
          width: "100%",
          paddingLeft: "45%",
          height: "35px",
          paddingBottom: "20%"
        }}
        onClick={() => upvotePost(id)}
      >
        <p>{count}</p>
      </Button>
    </div>
  );
}
