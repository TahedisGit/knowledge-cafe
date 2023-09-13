import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./components/Header/Header";
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </div>
  );
}

export default App;
