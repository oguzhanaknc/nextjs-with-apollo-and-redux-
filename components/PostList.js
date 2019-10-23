import { useQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import PostUpvoter from "./PostUpvoter";

const photos_q = gql`
  query photos {
    photos {
      id
      title
      like
      url
    }
  }
`;

export default function PostList() {
  const { data, loading, error } = useQuery(photos_q);
  useEffect(() => {
    if (!localStorage.getItem(1)) {
      data.photos.map(photo => {
        localStorage.setItem(photo.id, photo.like);
      });
    }
    return function cleanup() {
      localStorage.clear();
    };
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <section style={{ paddingLeft: "10%" }}>
      <ul>
        {data.photos.map(post => {
          return (
            <div
              class='card'
              style={{
                width: "25%",
                float: "left",
                padding: "10px",
                boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transition: "0.3s"
              }}
            >
              <img
                src={post.url}
                alt='Avatar'
                style={{ width: "100%", height: "320px" }}
              />
              <div class='container'>
                <h4>
                  <b className='title'>{post.title}</b>
                </h4>
                <p>
                  <PostUpvoter id={post.id} />
                </p>{" "}
              </div>
            </div>
          );
        })}
      </ul>
      <style jsx>{`
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .container {
          padding: 2px 16px;
        }
        label {
          white-space: pre;
        }
        .title {
          font-family: Arial, Helvetica, sans-serif;
          padding-left: 35%;
        }
      `}</style>
    </section>
  );
}
