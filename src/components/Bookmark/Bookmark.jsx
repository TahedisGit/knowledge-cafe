import React from "react";

export default function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-md">
      <p className="text-xl">{title}</p>
    </div>
  );
}
