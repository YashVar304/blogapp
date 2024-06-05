import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";
import { useState } from "react";
import Input from "../Input"; // Add this line
import Button from "../Button";
import Select from "../Select";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import RTE from "../RTE"; // Add this line

function PostForm({ post }) {
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post ? post.title : "",
        slug: post ? post.slug : "",
        content: post ? post.content : "",
        status: post ? post.status : "draft",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .toLowerCase()
        .trim()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");
    }
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title));
      }
      return () => {
        subscription.unsubscribe();
      };
    });
  }, [slugTransform, watch, setValue]);

  return (
    <form className="flex flex-wrap w-full">
      <div className="w-full lg:w-2/3 p-2">
        <div className="w-full">
          <Input
            label="Title"
            name="title"
            placeholder="Enter the Title"
            {...register("title")}
          />
          <Input
            label="Slug"
            name="slug"
            placeholder="Enter the Slug"
            {...register("slug")}
            onInput={(e) => setValue("slug", slugTransform(e.target.value))}
          />
          <div className="mt-4">
            <RTE name="content" control={control} label="Editor" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <div className="w-full">
          {post && (
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="h-60 w-full object-cover"
            />
          )}
          <Select
            label="Status"
            name="status"
            {...register("status")}
            options={["active", "inactive"]}
          />
          <Input
            label="Image"
            type="file"
            {...register("image", {
              required: post ? false : true,
            })}
            accept="image/jpg, image/jpeg, image/png, image/gif"
            className="border-none mt-4"
          />
          <div className="w-full mt-4">
            <Button
              type="submit"
              onClick={handleSubmit(submit)}
              className="bg-purple-500 text-white py-2.5 w-full rounded-full"
            >
              {post ? "Update" : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
