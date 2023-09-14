import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./components/Header/Header";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  const handleMarkAsRead = (id, time) => {
    setReadTime(readTime + time);
    // remove from bookmark
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blogs>
        <BookMarks readTime={readTime} bookmarks={bookmarks}></BookMarks>
      </div>
    </div>
  );
}

export default App;
