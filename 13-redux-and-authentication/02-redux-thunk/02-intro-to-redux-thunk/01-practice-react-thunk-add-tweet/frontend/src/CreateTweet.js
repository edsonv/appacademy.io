import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTweet } from "./store/tweet";

export const CreateTweet = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      dispatch(saveTweet({ message }));
      setMessage("");
    }
  };

  return (
    <>
      <h2>Post Tweet</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
