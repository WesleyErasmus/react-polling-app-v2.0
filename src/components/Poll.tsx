import { useState } from "react";
import "../styles/poll.css";

const Poll = (props: {
  heading: string;
  option1: string;
  option2: string;
  option3: string;
}) => {
  // Initialize a state variable to track the selected programming language. Set to an empty string
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <>
      {/* Poll form */}
      <form className="poll-form" action="">
        {/* Form heading */}
        <div className="form-heading">{props.heading}</div>

        {/* Radio buttons container */}
        <div className="radio-buttons-flex-container">
          {/* Radio option 1 */}
          <label
            className={
              selectedLanguage === props.option1 ? "selected-bold-font" : ""
            }
          >
            <input
              type="radio"
              value={props.option1}
              name="language"
              checked={selectedLanguage === props.option1}
              onChange={() => setSelectedLanguage(props.option1)}
            />
            {/* Label name */}
            {props.option1}
          </label>

          {/* Radio option 2 */}
          <label
            className={
              selectedLanguage === props.option2 ? "selected-bold-font" : ""
            }
          >
            <input
              type="radio"
              value={props.option2}
              name="language"
              checked={selectedLanguage === props.option2}
              onChange={() => setSelectedLanguage(props.option2)}
            />
            {/* Label name */}
            {props.option2}
          </label>

          {/* Radio option 3 */}
          <label
            className={
              selectedLanguage === props.option3 ? "selected-bold-font" : ""
            }
          >
            <input
              type="radio"
              value={props.option3}
              name="language"
              checked={selectedLanguage === props.option3}
              onChange={() => setSelectedLanguage(props.option3)}
            />
            {/* Label name */}
            {props.option3}
          </label>
        </div>

        {/* Form footer */}
        <div className="form-footer-container">
          {/* User profile container */}
          <div className="vote-img-details-flex-container">
            {/* Voter profile image placeholder */}
            <img
              className="voter-profile-img-placeholder"
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="voter profile images placeholder"
            />
            {/* Votes Details */}
            <div className="voteDetails">
              <div className="total-votes">Total Votes: 24</div>
              {/* Press and hold the Alt key, then type 0183 in the numeric keypad to type the dot character */}
              <span className="dot-divider">·</span>
              <div className="days-left">5 Days Left</div>
            </div>
          </div>

          {/* Vote Button */}
          <div>
            <input className="form-submit-btn" type="submit" value="Vote" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Poll;
