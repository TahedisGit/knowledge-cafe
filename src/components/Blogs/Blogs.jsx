import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({ handleAddToBookmarks, handleMarkAsRead }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl text-center p-4">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmarks={handleAddToBookmarks}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
}
