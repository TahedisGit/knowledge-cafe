import React from "react";
import Bookmark from "../Bookmark/Bookmark";

export default function BookMarks({ bookmarks }) {
  return (
    <div className=" bg-gray-100 ml-4 p-4 md:w-1/3">
      <h3 className="text-4xl text-center">
        BookMarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}
