import React from "react";
import IPost from "../../models/Post";
import Avatar from "../Avatar/Avatar.tsx";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline";

type Props = {
  post: IPost;
};

function Post({ post }: Props) {
  return (
    <div
      className="flex cursor-pointer rounded-md border border-gray-300  
    bg-white shadow-sm hover:border hover:border-gray-600" 
    >
      {/* //Votes */}
      <div
        className="flex flex-col items-center justify-start space-y-1
    rounded-l-md bg-gray-50 p-4 text-gray-400"
      >
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-black font-bold text-xs ">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
      </div>

      <div className="p-3 pb-1">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <Avatar />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">r/Username:</span>
          </p>
        </div>
        {/* Body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.postTitle}</h2>
          <p className="mt-2 text-sm font-light">{post.postBody}</p>
        </div>
        <img className="w-full" src={post.postImage} alt="" />

        {/* Footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatAltIcon className="h-6 w-6" />
            <p>Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <DotsHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
