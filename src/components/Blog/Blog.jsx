import React from "react";
import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog, handleAddToBookmarks }) {
  const { title, cover_img, reading_time, author, author_img, hashtags } = blog;
  console.log(blog);
  return (
    <div className="mb-20">
      <img
        className="w-full h-[350px] mb-4 rounded-md"
        src={cover_img}
        alt={`cover picture of ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] rounded-full mr-6"
            src={author_img}
            alt=""
          />
          <h4>{author}</h4>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="ml-2 text-2xl text-red-500"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-4">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="font-normal text-sm text-gray-500" href="">
              {" "}
              #{hash}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
