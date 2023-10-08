import { useState } from "react";
import "../styles/poll.css";

// Ratio button vote options array
const voteOptions = [
  { value: "Python", label: "Python" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Go", label: "Go" },
];

const Poll = () => {

  // Initialize a state variable to track the selected programming language. Set to an empty string
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <>
      {/* Poll form */}
      <form className="poll-form" action="">
        {/* Form heading */}
        <div className="form-heading">
          What programming languages do you use during interviews?
        </div>

        {/* Radio buttons container */}
        <div className="radio-buttons-flex-container">
          {/* Mapping through voteOptions array to display each vote option */}
          {voteOptions.map((option) => (
            <label
              key={option.value}
              className={
                selectedLanguage === option.value ? "selected-bold-font" : ""
              }
            >
              {/* Conditional styling using a ternary operator to bold the label text if it is selected. Below is displayed as an if-else statement:
              
              if (selectedLanguage) {
                  return "bold";
                } else {
                  return "";
                }
              */}

              <input
                type="radio"
                value={option.value}
                name="language"
                checked={selectedLanguage === option.value}
                // The checked attribute is set based on whether the selectedLanguage matches the value of that radio button

                onChange={() => setSelectedLanguage(option.value)}
                // When a radio button is selected, the onChange event triggers the corresponding setter function (setSelectedLanguage) to update the state with the new option.value selected language.
              />
              {/* Label name */}
              {option.label}
            </label>
          ))}
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
