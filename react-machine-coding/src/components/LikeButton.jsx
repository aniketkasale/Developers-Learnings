// Create a Like button which appearance changes based on the following states:The heart and spinner icons are provided for your convenience.
// The focus of this question is on the handling of the various states, not so much on being pixel perfect.
// As for colors, you can use #f00 for the red and #888 for the gray.
// Requirements
// In the button's default state, when it is clicked, it goes into the loading state and a request is made to the provided back end API which has a 50% chance of succeeding/failing.
// (Use public API’s to simulate the post API behaviour or use the setTimeout to simulate it)
// Success response: If the request was successful, the button changes to the "Liked" state.
// Failure response: Otherwise it returns to the "Default"/"Hovered" state depending on whether the cursor is still over the button.
// The error message from the back end API should be shown below the button.
// If the user clicks on a button in the "Liked" state, the reverse happens.

import { useState } from "react";

function LikeButton() {
  const [status, setStatus] = useState("default");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (status === "loading") return;

    const success = Math.random() > 0.5;

    setTimeout(() => {
      if (success) {
        setStatus("success");
        setError("");
      } else {
        setStatus("default");
        setError("Something went wrong");
      }
    }, 200);
  };

  return (
    <div>
      <button
        disabled={status === "loading"}
        style={{
          padding: "10px 20px",
          background: status === "success" ? "#f00" : "#888",
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
        onClick={handleClick}
      >
        like
      </button>

      <p>{error}</p>
    </div>
  );
}

export default LikeButton;
