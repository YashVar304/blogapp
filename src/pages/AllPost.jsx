import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import PostCard from "../Components/PostCard";
import Container from "../Components/container/Container";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {posts &&
          posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllPost;
