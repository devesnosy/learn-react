"use client";

import { useState } from "react";

export default function LikeButton() {
  // React states can be created using the "useState" and alike
  // "useState" is called a React "hook"
  // it is recommended to only modify states in the component that created them
  const [likes, setLikes] = useState(0);

  function handleLikeButtonClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleLikeButtonClick}>Like({likes})</button>;
}
