"use client";
import React, { useState } from "react";

export default function comments({ blogId }: { blogId: string }) {
  const [comments, setComments] = useState<string[]>([]);
  const [text, setText] = useState("");

  function handleAddComments() {
    if (text.trim()) {
      if (text.trim()) {
        setComments([...comments, text]);
        setText("");
      }
    }
  }
  return (
    <div>
      <h3>Comments</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      ></textarea>
      <button
        onClick={handleAddComments}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Comment
      </button>
      <ul className="mt-4 list-disc pl-4">
        {comments.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
