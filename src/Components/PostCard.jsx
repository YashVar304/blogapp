import React from "react";
import authService from "../appwrite/auth";
import configService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full min-w-sm bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8 mx-auto">
        <div className="w-full flex justify-center mb-4">
          <img
            src={configService.getFilePreview(featuredImage)}
            alt=""
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-center md:text-2xl lg:text-3xl">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
