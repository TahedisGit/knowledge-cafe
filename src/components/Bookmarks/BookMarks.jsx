import React from "react";
import Bookmark from "../Bookmark/Bookmark";

export default function BookMarks({ bookmarks, readTime }) {
  return (
    <div className=" bg-gray-100 ml-4 p-4 md:w-1/3">
      <div>
        <h2 className="text-2xl bg-slate-200 text-blue-600 p-2 rounded-lg text-center">
          Reading time: {readTime}
        </h2>
      </div>
      <h3 className="text-2xl text-center bg-slate-300 p-2 rounded-lg mt-2">
        BookMarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}
