import React, { useEffect, useState } from "react";
import { getPosts } from "../../api";
import Post from "../Post/Post.tsx";

function Feed() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:4000/posts`);
      let actualData = await response.json();
      setPosts(actualData);
    }
    getData();
  }, []);

  return (
    <div className="mt-5 space-y-4 w-full max-w-5xl">
      {posts?.map((post) => {
        return <Post key={post.id} setPosts post={post} />;
      })}
    </div>
  );
}

export default Feed;
