import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar.tsx";
import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

import { createPost } from "../../api";


type FormData = {
  id: number;
  postTitle: string;
  postBody: string;
  postImage: string | undefined;
  subreddit: string;
};

function PostBox() {
  const [posts, setPosts] = useState<any>([]);
 
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    function getData() {
      const response = fetch(`http://localhost:4000/posts`).then((response) => {
        let actualData = response.json();
        setPosts(actualData);
        console.log(actualData);
      });
    }
    getData();
  }, []);

  const onSubmit = handleSubmit(async (formData) => {
    const data = { ...formData, id: uuidv4() };
    const notification = toast.loading("Creating new post...");

    createPost(data);

    setValue("postTitle", "");
    setValue("postBody", "");
    setValue("subreddit", "");
    setValue("postImage", "");
    toast.success("New Post Created", { id: notification });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="sticky top-16 z-50 rounded-md border border-gray-300 
    p-2 bg-white border-rounded max-w-5xl mx-auto my-7"
    >
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register("postTitle", { required: true })}
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder={"Create a post by entering a title"}
        />
        <PhotographIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`cursor-pointer h-6 text-gray-300 ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className={`h-6 text-gray-300`} />
      </div>
      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              {...register("postBody")}
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              type="text"
              placeholder="Text"
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              {...register("subreddit", { required: true })}
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              type="text"
              placeholder="example: react.js"
            />
          </div>
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                {...register("postImage")}
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                type="text"
                placeholder="Optional..."
              />
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>-A Post Title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>-A Subreddit Title is required</p>
              )}
            </div>
          )}
          {watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
